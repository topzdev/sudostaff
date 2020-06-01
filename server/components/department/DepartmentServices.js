const DepartmentModel = require("./DepartmentModel");
const deparmentHelpers = require("./departmentHelpers");
const DeparmentHeadModel = require("./DepartmentHeadModel");
const EmployeeModel = require("../employee/EmployeeModel");
const PhotoModel = require("../photo/PhotoModel");
const parseCondition = require("../../helpers/parseCondition");

class DepartmentServices {
  constructor() {
    this.tableJoin = [
      {
        model: DeparmentHeadModel,
        attributes: ["id"],
        include: [
          {
            model: EmployeeModel,
            attributes: ["id", "firstName", "lastName", "fullName"],
            include: [
              {
                model: PhotoModel,
              },
            ],
          },
        ],
      },
    ];
  }

  async getOne({ id }, { include, exclude, withDeptHead }) {
    const result = await DepartmentModel.findAll({
      ...parseCondition({ limit: 1, include, exclude }),
      include: withDeptHead ? this.tableJoin : [],
      where: { id },
    });

    return {
      status: 200,
      msg: "Department fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({
    searchText,
    searchBy,
    limit,
    offset,
    include,
    exclude,
    withDeptHead,
  }) {
    const result = await DepartmentModel.findAndCountAll({
      ...parseCondition({
        searchText,
        searchBy,
        limit,
        offset,
        include,
        exclude,
      }),
      include: withDeptHead ? this.tableJoin : [],
    });
    return {
      status: 200,
      msg: "Departments fetch successfully",
      data: result,
    };
  }

  async create({ name, description, employeeId }) {
    if (await deparmentHelpers.isExist({ name }))
      return {
        status: 500,
        msg: "Department name is already exist",
      };

    const result = await DepartmentModel.create({ name, description });

    const head = await DeparmentHeadModel.create({
      departmentId: result.id,
      employeeId,
    });

    return {
      status: 200,
      msg: "Department added succesfully",
      data: result.id,
    };
  }

  async update(departmentInfo) {
    const id = departmentInfo.id;
    delete departmentInfo.id;

    const result = await DepartmentModel.update(departmentInfo, {
      where: { id },
    });

    const departmentHead = await DeparmentHeadModel.update(
      { employeeId: departmentInfo.employeeId },
      {
        where: { departmentId: id },
      }
    );

    console.log(departmentHead);

    return {
      status: 200,
      msg: "Department Updated Successfully",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    if (!(await deparmentHelpers.isExist({ name })))
      return {
        status: 500,
        msg: "Department is not exist",
      };

    const departmentHead = await DeparmentHeadModel.destroy({
      departmentId: id,
    });

    const result = await DepartmentModel.destroy({ where: { id } });

    console.log(departmentHead, result);

    return {
      status: 200,
      msg: "Department Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new DepartmentServices();
