const controller = require("./MailerController");
const express = require("express");
const router = express.Router();

router.post("/", controller.sendEmails);

module.exports = router;
