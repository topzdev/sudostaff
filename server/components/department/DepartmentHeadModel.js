module.exports = (sequelize, Datatypes) => {
  const DepartmentHead = sequelize.define(
    "departmentHeads",
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
      departmentId: {
        type: Datatypes.INTEGER,
        references: {
          model: "departments",
          key: "id",
        },
      },
    },
    { timestamps: true, paranoid: true }
  );

  DepartmentHead.associate = function (models) {
    models.DepartmentHead.belongsTo(models.Employee);
  };
  return DepartmentHead;
};
