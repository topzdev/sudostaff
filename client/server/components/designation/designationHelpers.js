const DesignationModel = require("./DesignationModel");

exports.isExist = async ({ name, id }) => {
  const condition = {};

  if (name) condition.name = name;
  if (id) condition.id = id;

  const result = await DesignationModel.findOne({ where: condition });

  return result ? true : false;
};
