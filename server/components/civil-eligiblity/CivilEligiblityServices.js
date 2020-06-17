const models = require("../models");

class CivilEligibilityServices {
  async getOne({ id }) {
    const result = await models.CivilEligibility.findByPk(id);
    return {
      status: 200,
      msg: "Civil Eligibility Fetched Successfully",
      data: result,
    };
  }
  async getAll({ id }) {
    const result = await models.CivilEligibility.findAll({
      where: { employeeId: id },
    });

    return {
      status: 200,
      msg: "Civil Eligibility Fetched Successfully",
      data: result,
    };
  }

  async create({
    employeeId,
    licenseTitle,
    licenseNumber,
    rating,
    validityDate,
    examinationDate,
    examinationPlace,
  }) {
    const result = await models.CivilEligibility.create(
      {
        employeeId,
        licenseTitle,
        licenseNumber,
        rating,
        validityDate,
        examinationDate,
        examinationPlace,
      },
      { returning: ["id"] }
    );

    return {
      status: 200,
      msg: "Civil Eligibility Added",
      data: result.id,
    };
  }

  async update(CivilEligibility) {
    const id = CivilEligibility.id;
    delete CivilEligibility.id;
    const result = await models.CivilEligibility.update(CivilEligibility, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Civil Eligibility Updated",
      data: result,
    };
  }

  async delete({ id }) {
    const result = await models.CivilEligibility.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Civil Eligibility Deleted",
    };
  }
}

module.exports = new CivilEligibilityServices();
