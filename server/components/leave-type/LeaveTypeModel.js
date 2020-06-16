module.exports = (sequelize, Datatypes) => {
  const LeaveType = sequelize.define("leaveTypes", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    description: Datatypes.STRING,
  });

  return LeaveType;
};
