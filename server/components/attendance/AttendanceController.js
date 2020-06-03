const { validateResponse } = require("../../helpers/validateResponse");
const attendanceServices = require("./AttendanceServices");

class AttendaceController {
  async fetchAllAttendance(req, res) {
    try {
      const result = await attendanceServices.getAll(req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchOneAttendance(req, res) {
    try {
      const result = await attendanceServices.getOne(req.params, req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async verifyAttendance(req, res) {
    try {
      console.log(req.body);
      const result = await attendanceServices.timeIn(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new AttendaceController();
