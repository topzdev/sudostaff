module.exports = (sequelize, Datatypes) => {
  const EducBackground = sequelize.define(
    "educationBackgrounds",
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
      level: Datatypes.STRING,
      degree: Datatypes.STRING,
      schoolName: Datatypes.STRING,
      from: Datatypes.DATEONLY,
      to: Datatypes.DATEONLY,
      graduateYear: Datatypes.INTEGER,
      recognition: Datatypes.STRING,
      scholarship: Datatypes.STRING,
    },
    { timestamps: false }
  );
  return EducBackground;
};
