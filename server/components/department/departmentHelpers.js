const DepartmentModel = require("./DepartmentModel");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.isExist = async ({ name, id }) => {
  const condition = {};

  if (name) condition.name = name;
  if (id) condition.id = id;

  const result = await DepartmentModel.count({ where: condition });
  console.log(result);
  return result ? true : false;
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
