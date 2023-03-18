const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const timeout = require("connect-timeout");
const bebBEBbeb = require("./routes/bebBEBbeb-routes");

const HttpError = require("./models/http-error");

const app = express();
app.use(bodyParser.json() ,timeout('600s'), haltOnTimedout);
 
app.use("/uploads/files", express.static(path.join("uploads", "files")));
 
app.use("/uploads/files2", express.static(path.join("uploads", "files2")));
 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});
 
app.use("/api/bebBEBbeb",timeout('600s'), haltOnTimedout, bebBEBbeb);
 
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});
 
app.use(timeout('600s'), haltOnTimedout,(error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
 
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

mongoose
  .connect(
    `mongodb+srv://rayan:123@cluster0.vwxfzlc.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 8080, "0.0.0.0");
    // app.listen(5000, "0.0.0.0");
  })
  .catch((err) => {
    console.log(err);
  });

