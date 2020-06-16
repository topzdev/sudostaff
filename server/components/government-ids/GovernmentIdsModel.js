module.exports = (sequelize, Datatypes) => {
  const GovernmentIds = sequelize.define(
    "governmentIds",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      governmentIssueId: Datatypes.STRING,
      idLicensePassportId: Datatypes.STRING,
      dateIssuance: Datatypes.DATEONLY,
      placeIssuance: Datatypes.STRING,
    },
    { timestamps: false }
  );

  return GovernmentIds;
};
