module.exports = (sequelize, Datatypes) => {
  const Benifits = sequelize.define(
    "benifits",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      gsisId: Datatypes.STRING,
      pagibigId: Datatypes.STRING,
      philhealthId: Datatypes.STRING,
      sssNo: Datatypes.STRING,
      tinNo: Datatypes.STRING,
      agencyEmployeerId: Datatypes.STRING,
    },
    { timestamps: false }
  );

  return Benifits;
};
