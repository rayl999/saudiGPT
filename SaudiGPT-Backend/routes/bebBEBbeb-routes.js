const express = require("express");
const { check } = require("express-validator");

const bebBEBbebController = require("../controllers/bebBEBbeb-controllers");

const router = express.Router();
const fileUpload = require("../middleware/file-upload");

router.post(
  "/meeting-summarization",
  fileUpload.single("voice"),
  bebBEBbebController.summarization
);

router.get(
    "/get-summarization",
    bebBEBbebController.getSummarization
  );
  
module.exports = router;
