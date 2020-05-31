const express = require("express");
const router = express.Router();
const contoller = require("./AttendanceController");

router.get("/:id", contoller.fetchAllAttendance);
router.get("/", contoller.fetchAllAttendance);
router.post("/", contoller.verifyAttendance);

module.exports = router;
