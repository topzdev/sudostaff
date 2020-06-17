const models = require("../models");

exports.isExist = async ({ name, id }) => {
  const condition = {};

  if (name) condition.name = name;
  if (id) condition.id = id;

  const result = await models.Designation.findOne({ where: condition });

  return result ? true : false;
};
