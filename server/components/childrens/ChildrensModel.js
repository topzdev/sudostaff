module.exports = (sequelize, Datatypes) => {
  const Childrens = sequelize.define(
    "childrens",
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
      fullName: Datatypes.STRING,
      birthDate: Datatypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Childrens;
};
