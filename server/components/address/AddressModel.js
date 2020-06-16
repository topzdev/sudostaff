module.exports = (sequelize, Datatypes) => {
  const Address = sequelize.define(
    "addresses",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      houseBlock: Datatypes.STRING,
      street: Datatypes.STRING,
      subdivision: Datatypes.STRING,
      barangay: Datatypes.STRING,
      city: Datatypes.STRING,
      province: Datatypes.STRING,
      zipcode: Datatypes.STRING,
      houseBlock2: Datatypes.STRING,
      street2: Datatypes.STRING,
      subdivision2: Datatypes.STRING,
      barangay2: Datatypes.STRING,
      city2: Datatypes.STRING,
      province2: Datatypes.STRING,
      zipcode2: Datatypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Address;
};
