const EmployeeModel = require("./EmployeeModel");
const PhotoModel = require("../photo/PhotoModel");
const DesignationModel = require("../designation/DesignationModel");
exports.isExist = async (id) => {
  const count = await EmployeeModel.count({
    where: { id },
  });
  return count ? true : false;
};

exports.joinTable = ({ withPhoto, withDesignation }) => {
  const tables = [];

  if (withPhoto) tables.push({ model: PhotoModel });
  if (withDesignation)
    tables.push({
      model: DesignationModel,
      attributes: ["name"],
    });

  return tables;
};
