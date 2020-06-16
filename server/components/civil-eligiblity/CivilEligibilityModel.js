module.exports = (sequelize, Datatypes) => {
  const CivilEligibility = sequelize.define(
    "civilEligibilities",
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
      licenseTitle: Datatypes.STRING,
      licenseNumber: Datatypes.STRING,
      rating: Datatypes.STRING,
      validityDate: Datatypes.DATEONLY,
      examinationDate: Datatypes.DATEONLY,
      examinationPlace: Datatypes.STRING,
    },
    { timestamps: false }
  );
  return CivilEligibility;
};
