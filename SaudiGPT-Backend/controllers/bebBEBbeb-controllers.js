const { validationResult } = require("express-validator");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const mongoose = require("mongoose");
const pdf = require("pdf-creator-node");
var path = require("path");
const uuid = require("uuid/v1");

const HttpError = require("../models/http-error");
const Summarization = require("../models/summarization");
const { response } = require("express");

const summarization = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  ////////////////////////
  //voice to text first
  var output = "hi";
  var summary = "TEST SUMMARY";
  var bullits = "TEST BULITS";
  var effectiveness = "TEST effectiveness ";

  var html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");

  try {
    var data = new FormData();
    data.append("file", fs.createReadStream(req.file.path));
    data.append("model", "whisper-1");
    data.append("language", "en");

    var config = {
      method: "post",
      url: "https://experimental.willow.vectara.io/v1/audio/transcriptions",
      headers: {
        "customer-id": "2617483538",
        "x-api-key": "zqt_nAOhEmamBR5M4goC3e563beorPABbNWQFGiYpw",
        ...data.getHeaders(),
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        output = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    const error = new HttpError("err", 500);
    return next(error);
  }
  // let voiceOutput = JSON.parse(response.data);

  ////////////////////////
  // now lets send it to gpt
  try {
    var data = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            '"' +
            output.text +
            '"' +
            "Summarize this meeting to the description and important information ",
        },
      ],
    });
    var config = {
      method: "post",
      url: "https://experimental.willow.vectara.io/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        "customer-id": "2617483538",
        "x-api-key": "zqt_nAOhEmamBR5M4goC3e563beorPABbNWQFGiYpw",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        summary = response.data.choices[0].message.content;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    const error = new HttpError("err", 500);
    return next(error);
  }

  try {
    var data = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            '"' +
            output.text +
            '"' +
            "Summarize this meeting to important information bullet points and tasks",
        },
      ],
    });
    var config = {
      method: "post",
      url: "https://experimental.willow.vectara.io/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        "customer-id": "2617483538",
        "x-api-key": "zqt_nAOhEmamBR5M4goC3e563beorPABbNWQFGiYpw",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        bullits = response.data.choices[0].message.content;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    const error = new HttpError("err", 500);
    return next(error);
  }
  try {
    var data = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            '"' +
            output.text +
            '"' +
            "what is the meeting effectiveness in short words ? what they can improve? bullet points ",
        },
      ],
    });
    var config = {
      method: "post",
      url: "https://experimental.willow.vectara.io/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        "customer-id": "2617483538",
        "x-api-key": "zqt_nAOhEmamBR5M4goC3e563beorPABbNWQFGiYpw",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        effectiveness = response.data.choices[0].message.content;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    const error = new HttpError("err", 500);
    return next(error);
  }
  var p = "./uploads/files2/" + uuid() + ".pdf";
  var document = {
    html: html,
    data: {
      summary: summary,
      bullits: bullits,
      effectiveness: effectiveness,
    },
    path: p,
    type: "",
  };

  var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
  };

  await pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  const s = new Summarization({
    audio: req.file.path,
    summary: summary,
    bullits: bullits,
    effectiveness: effectiveness,
    pdf: p,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await s.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("err", 500);
    return next(error);
  }
  res.json({
    output: s,
  });
};

const getSummarization = async (req, res, next) => {
  let summarizations;
  try {
    summarizations = await Summarization.find({}, "-password");
  } catch (err) {
    const error = new HttpError("err", 500);
    return next(error);
  }
  res.json({
    summarizations: summarizations.map((summarization) =>
      summarization.toObject({ getters: true })
    ),
  });
};

exports.summarization = summarization;
exports.getSummarization = getSummarization;
