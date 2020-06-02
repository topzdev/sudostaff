const EmployeeModel = require("./EmployeeModel");
const PhotoModel = require("../photo/PhotoModel");
const DesignationModel = require("../designation/DesignationModel");
const DepartmentModel = require("../department/DepartmentModel");
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
      attributes: ["id", "name"],
      include: [
        {
          model: DepartmentModel,
          attributes: ["id", "name"],
        },
      ],
    });

  return tables;
};
