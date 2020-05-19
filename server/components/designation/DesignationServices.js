const DesignationModel = require("./DesignationModel");
const designationHelpers = require("./designationHelpers");

class DesignationServices {
  async getOne({ id }) {
    const result = await DesignationModel.findAll({ where: { id }, limit: 1 });
    return {
      status: 200,
      msg: "Designation fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({ search, limit, offset }) {
    const options = {
      where: {},
      offset,
      limit,
    };

    if (search) options.where.name = { [Op.like]: `%${search}%` };

    const result = await DesignationModel.findAll(options);

    return {
      status: 200,
      msg: "Designations fetch successfully",
      data: result,
    };
  }

  async create({ departmentId, name }) {
    if (await designationHelpers.isExist({ name }))
      return {
        status: 500,
        msg: "Designation name is already exist",
      };

    const result = await DesignationModel.create({ departmentId, name });

    return {
      status: 200,
      msg: "Designation added succesfully",
      data: result.id,
    };
  }

  async update(designationInfo) {
    const id = designationInfo.id;
    delete designationInfo.id;

    if (await designationHelpers.isExist({ name: designationInfo.name }))
      return {
        status: 500,
        msg: "Designation name is already exist",
      };

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
