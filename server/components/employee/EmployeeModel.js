const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const PhotoModel = require("../photo/PhotoModel");
const DesignationModel = require("../designation/DesignationModel");
const DepartmentHeadModel = require("../department/DepartmentHeadModel");
const LeaveRequestModel = require("../leave-request/LeaveRequestModel");
const AccountModel = require("../account/AccountModel");

class EmployeeModel extends Model {}

EmployeeModel.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    fullName: {
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    middleName: Sequelize.STRING,
    extensionName: Sequelize.STRING,
    birthDate: Sequelize.DATEONLY,
    birthPlace: Sequelize.STRING,
    citizenship: Sequelize.STRING,
    emailAddress: Sequelize.STRING,
    landline: Sequelize.STRING,
    mobile: Sequelize.STRING,
    bloodType: {
      type: Sequelize.ENUM("a+", "a-", "b+", "b-", "ab+", "o+", "o"),
      allowNull: false,
    },
    height: Sequelize.DECIMAL,
    weight: Sequelize.DECIMAL,
    civilStatus: {
      type: Sequelize.ENUM("d", "m", "x", "s", "w", "n", "l"),
      allowNull: false,
    },
    joiningDate: Sequelize.DATEONLY,

    gender: {
      type: Sequelize.ENUM("m", "f"),
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    benifitsId: {
      type: Sequelize.INTEGER,
      references: {
        model: "benifits",
        key: "id",
      },
    },
    familyDetailsId: {
      type: Sequelize.INTEGER,
      references: {
        model: "familyDetails",
        key: "id",
      },
    },
    addressId: {
      type: Sequelize.INTEGER,
      references: {
        model: "addresses",
        key: "id",
      },
    },
    governmentIssuedId: {
      type: Sequelize.INTEGER,
      references: {
        model: "governmentIds",
        key: "id",
      },
    },
    designationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "designations",
        key: "id",
      },
    },
    photoId: {
      type: Sequelize.INTEGER,
      references: {
        model: "photos",
        key: "id",
      },
    },
  },
  { sequelize, modelName: "employees", timestamps: true, paranoid: true }
);
EmployeeModel.belongsTo(PhotoModel);
EmployeeModel.belongsTo(DesignationModel);
DepartmentHeadModel.belongsTo(EmployeeModel);
AccountModel.belongsTo(EmployeeModel, {
  as: "employee",
  foreignKey: {
    name: "employeeId",
  },
});
LeaveRequestModel.belongsTo(EmployeeModel, {
  as: "submittedBy",
  foreignKey: {
    name: "employeeId",
  },
});
LeaveRequestModel.belongsTo(EmployeeModel, {
  as: "authorizedBy",
  foreignKey: {
    name: "authorizedPersonId",
  },
});

module.exports = EmployeeModel;
