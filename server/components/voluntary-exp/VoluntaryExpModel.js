module.exports = (sequelize, Datatypes) => {
  const VoluntaryExp = sequelize.define(
    "voluntaryExperiences",
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

      company: Datatypes.STRING,
      position: Datatypes.STRING,
      address: Datatypes.STRING,
      from: Datatypes.INTEGER,
      to: Datatypes.INTEGER,
      totalHours: Datatypes.DECIMAL(10, 2),
    },
    { timestamps: false }
  );

  return VoluntaryExp;
};
