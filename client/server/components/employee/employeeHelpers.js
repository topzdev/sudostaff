const EmployeeModel = require("./EmployeeModel");

exports.isExist = async (id) => {
  const count = await EmployeeModel.count({
    where: { id },
  });

  return count ? true : false;
};
