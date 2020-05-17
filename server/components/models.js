const DepartmentModel = require("./department/DepartmentModel");
const DesignationModel = require("./designation/DesignationModel");
const LeaveRequestModel = require("./leave-request/LeaveRequestModel");
const EmployeeModel = require("./employee/EmployeeModel");
const LeaveTypeModel = require("./leave-type/LeaveTypeModel");
const AttendanceModel = require("./attendance/AttendanceModel");

module.exports = function () {
  // AttendanceModel.sync({ force: true });
  // DepartmentModel.sync({ force: true });
  // EmployeeModel.sync({ force: true });
  // DesignationModel.sync({ force: true });
  // LeaveTypeModel.sync({ force: true });
  // LeaveRequestModel.sync({ force: true });
  //   ContactModel.drop({ force: true });
  // EmployeeModel.sync({ force: true });
};
