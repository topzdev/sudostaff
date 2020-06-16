module.exports = (sequelize, Datatypes) => {
  const WorkExp = sequelize.define(
    "workExperiences",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employeeId: {
        type: Datatypes.STRING,
        references: {
          model: "employees",
          key: "id",
        },
      },
      company: Datatypes.STRING,
      position: Datatypes.STRING,
      salaryGrade: Datatypes.STRING,
      stepIncremented: Datatypes.STRING,
      monthlySalaray: Datatypes.DECIMAL(10, 2),
      from: Datatypes.INTEGER,
      to: Datatypes.INTEGER,
      isFullTime: Datatypes.BOOLEAN,
      isGovernmentService: Datatypes.BOOLEAN,
    },
    { timestamps: false }
  );
  return WorkExp;
};
