module.exports = (sequelize, Datatypes) => {
  const TrainingPrograms = sequelize.define(
    "trainingPrograms",
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
      title: Datatypes.STRING,
      from: Datatypes.DATEONLY,
      to: Datatypes.DATEONLY,
      totalHours: Datatypes.DECIMAL(10, 2),
      type: Datatypes.STRING,
      sponsor: Datatypes.STRING,
    },
    { timestamps: true }
  );

  return TrainingPrograms;
};
