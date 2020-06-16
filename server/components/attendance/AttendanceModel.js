module.exports = (sequelize, Datatypes) => {
  const Attendance = sequelize.define(
    "attendances",
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

      amBreakStart: Datatypes.DATE,
      amBreakEnd: Datatypes.DATE,

      pmBreakStart: Datatypes.DATE,
      pmBreakEnd: Datatypes.DATE,

      lunchBreakStart: Datatypes.DATE,
      lunchBreakEnd: Datatypes.DATE,

      signInTime: {
        type: Datatypes.DATE,
        defaultValue: Datatypes.NOW,
      },

      signOutTime: Datatypes.DATE,
    },
    { timestamps: true }
  );

  return Attendance;
};
