const Sequelize = require("sequelize");
const AttendanceModel = require("./AttendanceModel");
const attendanceHelpers = require("./attendanceHelpers");
const employeeHelpers = require("../employee/employeeHelpers");
const employeeServices = require("../employee/EmployeeServices");

class AttendaceServices {
  async getAll({ date }) {
    const result = await AttendanceModel.findAll(
      attendanceHelpers.parseCondition({ date })
    );

    return {
      status: "200",
      msg: "Attendance record successfully fetched",
      data: result,
    };
  }

  async getOne({ id }, { date }) {
    const result = await AttendanceModel.findOne(
      attendanceHelpers.parseCondition({ date, employeeId: id })
    );

    return {
      status: "200",
      msg: "Attendance record successfully fetched",
      data: result,
    };
  }

  async timeIn({ employeeId }) {
    /** Check if the employee is existing in record */
    if (!(await employeeHelpers.isExist(employeeId)))
      return {
        status: "400",
        msg: "Employee not exist",
      };

    /** if the user is already timed in that day we will call the time out */
    const isAlreadySignIn = await attendanceHelpers.isAlreadyTimeIn(employeeId);
    if (isAlreadySignIn) {
      return await this.timeOut(isAlreadySignIn);
    }

    // fetch the employee for displaying employee info in login
    const employee = await employeeServices.getOne({ id: employeeId });
    const result = await AttendanceModel.create(
      { employeeId },
      { returning: ["id"] }
    );

    return {
      status: "200",
      msg: "Successfully timed in!",
      data: { employee: employee.data, result },
    };
  }

  async timeOut({ employeeId, id, signOutTime, signInTime }) {
    console.log(employeeId, id, signOutTime, signInTime);

    // Check if not sign in first
    if (signInTime === null)
      return {
        status: "400",
        msg: "Please sign in first",
      };

    // Check if already signed out
    if (signOutTime !== null)
      return {
        status: "400",
        msg: "You already signed out @" + signOutTime,
      };

    // fetch the employee for displaying employee info in login
    const employee = await employeeServices.getOne({ id: employeeId });

    // after checking if the employee is already timein then we update the employee attenadace signout to current datetime using Sequeilize.NOW
    const result = await AttendanceModel.update(
      {
        signOutTime: Sequelize.fn("NOW"),
      },
      { where: { id } }
    );

    return {
      status: "200",
      msg: "Successfully timed out!",
      data: { employee: employee.data, result },
    };
  }
}

module.exports = new AttendaceServices();
