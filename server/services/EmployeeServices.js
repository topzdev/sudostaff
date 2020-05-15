const EmployeeModel = require("../models/EmployeeModel");

class EmployeeServices {
  async isExist(id) {
    const count = await EmployeeModel.count({
      where: { id },
    });

    return count ? true : false;
  }

  async getOne({ id }) {
    const result = await EmployeeModel.findAll({
      where: { id, isRemoved: false },
      limit: 1,
    });
    console.log(result);
    return {
      status: "200",
      msg: "Employee fetch successfully",
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

    const result = await EmployeeModel.findAll(options);
    return {
      status: "200",
      msg: "Employees fetch successfully",
      data: result,
    };
  }

  async create(contactInfo) {
    if (await this.isExist(id))
      return {
        status: "500",
        msg: "Employee ID is already exist",
      };

    const result = await EmployeeModel.create(contactInfo);
    console.log(result);
    return {
      status: "200",
      msg: "Employee Successfully Added",
      data: result,
    };
  }

  async update(contactInfo) {
    const id = contactInfo.id;
    delete contactInfo.id;
    const result = await EmployeeModel.update(contactInfo, {
      where: { id: id },
    });

    console.log(result);
    return {
      status: "200",
      msg: "Employee Successfully Updated",
      data: result,
    };
  }

  async remove({ id }) {
    console.log(id);
    if (!(await this.isExist(id)))
      return {
        status: "500",
        msg: "Employee is not exist",
      };

    const result = await EmployeeModel.update(
      { isRemoved: true },
      { where: { id } }
    );

    return {
      status: "200",
      msg:
        "Employee Remove Temporarily, Only Administrator can only delete this data",
      data: result,
    };
  }

  async delete({ id }) {
    console.log(id);
    if (!(await this.isExist(id)))
      return {
        status: "500",
        msg: "Employee is not exist",
      };

    const result = await EmployeeModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Employee Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new EmployeeServices();
