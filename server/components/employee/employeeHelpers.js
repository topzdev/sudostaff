const EmployeeModel = require("./EmployeeModel");

exports.isExist = async (id) => {
  const count = await EmployeeModel.count({
    where: { id },
  });

  return count ? true : false;
};

exports.parseCondition = ({ search, limit, offset }) => {
  const options = {
    where: {},
    offset,
    limit,
  };

  if (search) options.where.name = { [Op.like]: `%${search}%` };

  return options;
};
