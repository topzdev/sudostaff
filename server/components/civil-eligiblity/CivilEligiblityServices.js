const CivilEligibilityModel = require("./CivilEligibilityModel");

class CivilEligibilityServices {
  async getAll({ id }) {
    const result = await CivilEligibilityModel.findAll({
      where: { employeeId: id },
    });

    return {
      status: "200",
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
    const result = await CivilEligibilityModel.create(
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
      status: "200",
      msg: "Civil Eligibility Added",
      data: result.id,
    };
  }

  async update(CivilEligibility) {
    const id = CivilEligibility.id;
    delete CivilEligibility.id;
    const result = await CivilEligibilityModel.update(CivilEligibility, {
      where: { id },
    });

    return {
      status: "200",
      msg: "Civil Eligibility Updated",
      data: result,
    };
  }

  async delete({ id }) {
    const result = await CivilEligibilityModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Civil Eligibility Deleted",
    };
  }
}

module.exports = new CivilEligibilityServices();
