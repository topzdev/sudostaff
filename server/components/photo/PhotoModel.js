module.exports = (sequelize, Datatypes) => {
  const Photo = sequelize.define(
    "photos",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      photoUrl: Datatypes.STRING,
      photoId: Datatypes.STRING,
    },
    { timestamps: false }
  );

  return Photo;
};
