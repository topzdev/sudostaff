const models = require("../models");
exports.isExist = async (id) => {
  const count = await models.Employee.count({
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

  if (withPhoto) tables.push({ model: models.Photo });
  if (withDesignation)
    tables.push({
      model: models.Designation,
      attributes: ["id", "name"],
      include: [
        {
          model: models.Department,
          attributes: ["id", "name"],
          include: withDeptHead
            ? [
                {
                  model: models.DepartmentHead,
                  attributes: ["id", "employeeId"],
                  include: [
                    {
                      model: models.Employee,
                      attributes: [
                        "firstName",
                        "lastName",
                        "fullName",
                        "photoId",
                      ],
                      include: [
                        {
                          model: models.Photo,
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
