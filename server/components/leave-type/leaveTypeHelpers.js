const LeaveTypeModel = require("./LeaveTypeModel");

exports.isExist = async ({ id, name }) => {
  const condition = {};
  console.log(id);
  if (id) condition.id = id;
  if (name) condition.name = name;

  const result = await LeaveTypeModel.findOne({ where: condition });
  return result ? true : false;
};
