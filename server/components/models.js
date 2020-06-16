const Sequelize = require("sequelize");
const database = require("../database");
const sequelize = database;

const models = {
  Employee: sequelize.import("./employee/EmployeeModel"),
  Designation: sequelize.import("./designation/DesignationModel"),
  Department: sequelize.import("./department/DepartmentModel"),
  DepartmentHead: sequelize.import("./department/DepartmentHeadModel"),
  LeaveRequest: sequelize.import("./leave-request/LeaveRequestModel"),
  LeaveType: sequelize.import("./leave-type/LeaveTypeModel"),
  Photo: sequelize.import("./photo/PhotoModel"),
  FamilyDetails: sequelize.import("./family-details/FamilyDetailsModel"),
  Benifits: sequelize.import("./benifits/BenifitsModel"),
  Attendance: sequelize.import("./attendance/AttendanceModel"),
  GovernmentIds: sequelize.import("./government-ids/GovernmentIdsModel"),
  Address: sequelize.import("./address/AddressModel"),
  EducBackground: sequelize.import(
    "./educational-background/EducBackgroundModel"
  ),
  CivilEligibility: sequelize.import(
    "./civil-eligiblity/CivilEligibilityModel"
  ),
  WorkExp: sequelize.import("./work-experience/WorkExpModel"),
  TrainingPrograms: sequelize.import(
    "./training-programs/TrainingProgramsModel"
  ),
  VoluntaryExp: sequelize.import("./voluntary-exp/VoluntaryExpModel"),
  Childrens: sequelize.import("./childrens/ChildrensModel"),
  Account: sequelize.import("./account/AccountModel"),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
models.sequelize = database;
models.Sequelize = Sequelize;

module.exports = models;
