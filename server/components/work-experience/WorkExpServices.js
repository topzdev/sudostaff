const models = require("../models");

class WorkExpServices {
  async getOne({ id }) {
    const result = await models.WorkExp.findByPk(id);

    return {
      status: 200,
      msg: "Licenses Information Fetched Successfully",
      data: result,
    };
  }
  async getAll({ id }) {
    const result = await models.WorkExp.findAll({
      where: { employeeId: id },
    });

    return {
      status: 200,
      msg: "Licenses Information Fetched Successfully",
      data: result,
    };
  }

  async create({
    employeeId,
    company,
    position,
    salaryGrade,
    stepIncremented,
    monthlySalaray,
    from,
    to,
    isFullTime,
    isGovernmentService,
  }) {
    const result = await models.WorkExp.create(
      {
        employeeId,
        company,
        position,
        salaryGrade,
        stepIncremented,
        monthlySalaray,
        from,
        to,
        isFullTime,
        isGovernmentService,
      },
      { returning: ["id"] }
    );

    return {
      status: 200,
      msg: "Licenses Information Added",
      data: result.id,
    };
  }

  async update(licenseInfo) {
    const id = licenseInfo.id;
    delete licenseInfo.id;
    const result = await models.WorkExp.update(licenseInfo, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Licenses Information Updated",
      data: result,
    };
  }

  async delete({ id }) {
    const result = await models.WorkExp.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Licenses Information Deleted",
    };
  }
}

module.exports = new WorkExpServices();
