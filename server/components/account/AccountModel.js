module.exports = (sequelize, Datatypes) => {
  const Account = sequelize.define(
    "accounts",
    {
      id: {
        type: Datatypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Datatypes.UUIDV4,
      },
      employeeId: {
        type: Datatypes.STRING,
        allowNull: false,
        references: {
          model: "employees",
          key: "id",
        },
      },
      username: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: Datatypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: true, paranoid: true }
  );

  return Account;
};
