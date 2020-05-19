const DepartmentModel = require("./department/DepartmentModel");
const DesignationModel = require("./designation/DesignationModel");
const LeaveRequestModel = require("./leave-request/LeaveRequestModel");
const EmployeeModel = require("./employee/EmployeeModel");
const LeaveTypeModel = require("./leave-type/LeaveTypeModel");
const AttendanceModel = require("./attendance/AttendanceModel");
const BenifitsModel = require("./benifits/BenifitsModel");
const GovernmentIdsModel = require("./government-ids/GovernmentIdsModel");
const EducBackgroundModel = require("./educational-background/EducBackgroundModel");
const CivilEligibiltyModel = require("./civil-eligiblity/CivilEligibilityModel");
const FamilyDetailsModel = require("./family-details/FamilyDetailsModel");
const LicenseInfosModel = require("./license-info/LicenseInfoModel");
const TrainingProgramsModel = require("./training-programs/TrainingProgramsModel");
const VoluntaryExpModel = require("./voluntary-exp/VoluntaryExpModel");
const ChildrensModel = require("./childrens/ChildrensModel");
const AddressModel = require("./address/AddressModel");
const ImageModel = require("./image/ImageModel");

module.exports = function () {
  // EmployeeModel.sync({ force: true });
  // DesignationModel.sync({ force: true });
  // LeaveTypeModel.sync({ force: true });
  // LeaveRequestModel.sync({ force: true });
  // AttendanceModel.sync({ force: true });
  // GovernmentIdsModel.sync({ force: true });
  // FamilyDetailsModel.sync({ force: true });
  // BenifitsModel.sync({ force: true });
  // AddressModel.sync({ force: true });
  /**Many to One*/
  // EducBackgroundModel.sync({ force: true });
  // CivilEligibiltyModel.sync({ force: true });
  // LicenseInfosModel.sync({ force: true });
  // TrainingProgramsModel.sync({ force: true });
  // VoluntaryExpModel.sync({ force: true });
  // ChildrensModel.sync({ force: true });
  /**One to Many*/
  // DepartmentModel.sync({ force: true });
  // ImageModel.sync({ force: true });
};
