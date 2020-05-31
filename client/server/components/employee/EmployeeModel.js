const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const PhotoModel = require("../photo/PhotoModel");

class EmployeeModel extends Model {
  get fullName() {
    return this.firsName + " " + this.lastName;
  }
}

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
    bloodType: Sequelize.STRING(5),
    height: Sequelize.DECIMAL,
    weight: Sequelize.DECIMAL,
    civilStatus: Sequelize.STRING,
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

module.exports = EmployeeModel;
