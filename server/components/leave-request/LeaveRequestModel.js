module.exports = (sequelize, Datatypes) => {
  const LeaveRequest = sequelize.define(
    "leaveRequest",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      employeeId: {
        type: Datatypes.STRING,
        references: {
          model: "employees",
          key: "id",
        },
      },

      leaveTypeId: {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
          model: "leaveTypes",
          key: "id",
        },
      },

      startDate: {
        type: Datatypes.STRING,
        allowNull: false,
      },

      endDate: {
        type: Datatypes.STRING,
        allowNull: false,
      },

      reason: {
        type: Datatypes.STRING,
        allowNull: false,
      },

      status: {
        type: Datatypes.ENUM("pending", "rejected", "approved"),
        defaultValue: "pending",
      },

      authorizedComment: {
        type: Datatypes.STRING,
      },

      authorizedPersonId: {
        type: Datatypes.STRING,
        references: {
          model: "employees",
          key: "id",
        },
      },
    },
    { timestamps: true, paranoid: true }
  );

  LeaveRequest.associate = function (models) {
    models.LeaveRequest.belongsTo(models.LeaveType);
  };

  return LeaveRequest;
};
