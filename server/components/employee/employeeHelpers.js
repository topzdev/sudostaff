const EmployeeModel = require("./EmployeeModel");
const PhotoModel = require("../photo/PhotoModel");
const DesignationModel = require("../designation/DesignationModel");
const DepartmentModel = require("../department/DepartmentModel");
const DepartmentHeadModel = require("../department/DepartmentHeadModel");
exports.isExist = async (id) => {
  const count = await EmployeeModel.count({
    where: { id },
  });
  return count ? true : false;
};

exports.flatten = (result) => {
  let data = result;
  let department = null,
    departmentHead = null;

  if (result.designation.department) {
    department = result.designation.department;

    if (result.designation.department.departmentHead) {
      departmentHead = result.designation.department.departmentHead;
      departmentHead = { ...departmentHead, ...departmentHead.employee };
      delete departmentHead.employee;
      delete department.departmentHead;
    }

    delete data.designation.department;

    if (department) data.department = department;
    if (departmentHead) data.departmentHead = departmentHead;
  }

  return data;
};

exports.arrayFlatten = (result) => {
  return result.forEach((obj) => this.flatten(obj));
};

exports.joinTable = ({ withPhoto, withDesignation, withDeptHead }) => {
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
          include: withDeptHead
            ? [
                {
                  model: DepartmentHeadModel,
                  attributes: ["id", "employeeId"],
                  include: [
                    {
                      model: EmployeeModel,
                      attributes: [
                        "firstName",
                        "lastName",
                        "fullName",
                        "photoId",
                      ],
                      include: [
                        {
                          model: PhotoModel,
                        },
                      ],
                    },
                  ],
                },
              ]
            : [],
        },
      ],
    });

  return tables;
};
