const models = require("../models");

exports.isExist = async ({ id, name }) => {
  const condition = {};
  console.log(id);
  if (id) condition.id = id;
  if (name) condition.name = name;

  const result = await models.LeaveType.findOne({ where: condition });
  return result ? true : false;
};
