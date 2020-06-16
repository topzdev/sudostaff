module.exports = (sequelize, Datatypes) => {
  const FamilyDetails = sequelize.define(
    "familyDetails",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      spouseFirstName: Datatypes.STRING,
      spouseMiddleName: Datatypes.STRING,
      spouseLastName: Datatypes.STRING,
      spouseExt: Datatypes.STRING,
      fatherFirstName: Datatypes.STRING,
      fatherMiddleName: Datatypes.STRING,
      fatherLastName: Datatypes.STRING,
      fatherExt: Datatypes.STRING,
      motherFirstName: Datatypes.STRING,
      motherMiddleName: Datatypes.STRING,
      motherLastName: Datatypes.STRING,
      motherExt: Datatypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return FamilyDetails;
};
