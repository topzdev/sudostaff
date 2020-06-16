module.exports = (sequelize, Datatypes) => {
  const Designation = sequelize.define(
    "designations",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      departmentId: {
        type: Datatypes.INTEGER,
        references: {
          key: "id",
          model: "departments",
        },
      },
      name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      description: {
        type: Datatypes.STRING,
      },
    },
    { timestamps: true, paranoid: true }
  );
  Designation.associate = function (models) {
    models.Department.hasMany(models.Designation);
    models.Designation.belongsTo(models.Department);
  };

  return Designation;
};
