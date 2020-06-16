module.exports = (sequelize, Datatypes) => {
  const Department = sequelize.define(
    "departments",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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

  Department.associate = function (models) {
    models.Department.hasOne(models.DepartmentHead);
    models.DepartmentHead.belongsTo(models.Department);
  };

  return Department;
};
