const DesignationModel = require("../models/DesignationModel");

class DesignationServices {
  async getOne({ id }) {
    const result = await DesignationModel.findAll({ where: { id }, limit: 1 });
    return {
      status: "200",
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
      status: "200",
      msg: "Designations fetch successfully",
      data: result,
    };
  }
  async create({ departmentId, name }) {
    console.log(departmentId, name);
    const isExist = await DesignationModel.findOne({ where: { name } });
    console.log(isExist);
    if (isExist)
      return {
        status: "500",
        msg: "Designation name is already exist",
      };

    const result = await DesignationModel.create({ departmentId, name });

    console.log(result);

    return {
      status: "200",
      msg: "Designation added succesfully",
      data: result,
    };
  }

  async update({ id, departmentId, name }) {
    const isExist = await DesignationModel.findOne({ where: { name } });

    if (isExist)
      return {
        status: "500",
        msg: "Designation name is already exist",
      };

    const result = await DesignationModel.update(
      { departmentId, name },
      { where: { id } }
    );

    console.log(result);

    return {
      status: "200",
      msg: "Designation updated succesfully",
      data: result,
    };
  }

  async remove({ id }) {
    console.log(id);
    const isExist = await DesignationModel.findOne({ where: { id } });
    if (!isExist)
      return {
        status: "500",
        msg: "Designation is not exist",
      };

    const result = await DesignationModel.update(
      { isRemoved: true },
      { where: { id } }
    );

    return {
      status: "200",
      msg:
        "Designation Remove Temporarily, Only Administrator can delete this data",
      data: result,
    };
  }

  async delete({ id }) {
    console.log(id);
    const isExist = await DesignationModel.findOne({ where: { id } });
    if (!isExist)
      return {
        status: "500",
        msg: "Designation is not exist",
      };

    const result = await DesignationModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Designation Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new DesignationServices();
