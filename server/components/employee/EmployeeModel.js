module.exports = (sequelize, Datatypes) => {
  const Employee = sequelize.define(
    "employees",
    {
      id: {
        type: Datatypes.STRING,
        primaryKey: true,
      },
      firstName: Datatypes.STRING,
      lastName: Datatypes.STRING,
      fullName: {
        type: Datatypes.VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
      },
      middleName: Datatypes.STRING,
      extensionName: Datatypes.STRING,
      birthDate: Datatypes.DATEONLY,
      birthPlace: Datatypes.STRING,
      citizenship: Datatypes.STRING,
      emailAddress: Datatypes.STRING,
      landline: Datatypes.STRING,
      mobile: Datatypes.STRING,
      bloodType: {
        type: Datatypes.ENUM("a+", "a-", "b+", "b-", "ab+", "o+", "o"),
        allowNull: false,
      },
      height: Datatypes.DECIMAL,
      weight: Datatypes.DECIMAL,
      civilStatus: {
        type: Datatypes.ENUM("d", "m", "x", "s", "w", "n", "l"),
        allowNull: false,
      },
      joiningDate: Datatypes.DATEONLY,

      gender: {
        type: Datatypes.ENUM("m", "f"),
        allowNull: false,
      },
      isActive: {
        type: Datatypes.BOOLEAN,
        defaultValue: true,
      },
      benifitsId: {
        type: Datatypes.INTEGER,
        references: {
          model: "benifits",
          key: "id",
        },
      },
      familyDetailsId: {
        type: Datatypes.INTEGER,
        references: {
          model: "familyDetails",
          key: "id",
        },
      },
      addressId: {
        type: Datatypes.INTEGER,
        references: {
          model: "addresses",
          key: "id",
        },
      },
      governmentIssuedId: {
        type: Datatypes.INTEGER,
        references: {
          model: "governmentIds",
          key: "id",
        },
      },
      designationId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
          model: "designations",
          key: "id",
        },
      },
      photoId: {
        type: Datatypes.INTEGER,
        references: {
          model: "photos",
          key: "id",
        },
      },
    },
    { timestamps: true, paranoid: true }
  );

  Employee.associate = function (models) {
    models.LeaveRequest.belongsTo(models.Employee, {
      as: "submittedBy",
      foreignKey: {
        name: "employeeId",
      },
    });
    models.LeaveRequest.belongsTo(models.Employee, {
      as: "authorizedBy",
      foreignKey: {
        name: "authorizedPersonId",
      },
    });
    models.Employee.belongsTo(models.Photo);
    models.Employee.belongsTo(models.Designation);
    models.Account.belongsTo(models.Employee, {
      as: "employee",
      foreignKey: {
        name: "employeeId",
      },
    });
  };

  return Employee;
};
