const DesignationModel = require("./DesignationModel");
const designationHelpers = require("./designationHelpers");
const DepartmentModel = require("../department/DepartmentModel");
const parseCondition = require("../../helpers/parseCondition");

class DesignationServices {
  constructor() {
    this.tableJoin = [{ model: DepartmentModel, attributes: ["name", "id"] }];
  }
  async getOne({ id }, { include, exclude, withDept }) {
    const result = await DesignationModel.findAll({
      ...parseCondition({ limit: 1, include, exclude }),
      include: withDept ? this.tableJoin : [],
      where: { id },
    });

    return {
      status: 200,
      msg: "Designation fetch successfully",
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
    withDept,
  }) {
    const result = await DesignationModel.findAndCountAll({
      ...parseCondition({
        searchText,
        searchBy,
        limit,
        offset,
        include,
        exclude,
      }),
      include: withDept ? this.tableJoin : [],
    });

    return {
      status: 200,
      msg: "Designations fetch successfully",
      data: result,
    };
  }

  async create({ departmentId, name, description }) {
    if (await designationHelpers.isExist({ name }))
      return {
        status: 500,
        msg: "Designation name is already exist",
      };

    const result = await DesignationModel.create({
      departmentId,
      name,
      description,
    });

    return {
      status: 200,
      msg: "Designation added succesfully",
      data: result.id,
    };
  }

  async update(designationInfo) {
    const id = designationInfo.id;
    delete designationInfo.id;

    /**
      // add here a name validation when needed
      if (await designationHelpers.isExist({ name: designationInfo.name }))
      return {
        status: 400,
        msg: "Designation name is already exist",
      };
     */

    const result = await DesignationModel.update(designationInfo, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Designation updated succesfully",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    if (!(await designationHelpers.isExist({ id })))
      return {
        status: 500,
        msg: "Designation is not exist",
      };

    const result = await DesignationModel.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Designation Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new DesignationServices();
