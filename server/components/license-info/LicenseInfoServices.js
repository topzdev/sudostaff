const LicenseInfoModel = require("./LicenseInfoModel");

class LicenseInfoServices {
  async getAll({ id }) {
    const result = await LicenseInfoModel.findAll({
      where: { employeeId: id },
    });

    return {
      status: "200",
      msg: "Licenses Information Fetched Successfully",
      data: result,
    };
  }

  async create({
    employeeId,
    company,
    position,
    salaryGrade,
    stepIncrementd,
    monthlySalaray,
    from,
    to,
    isFullTime,
    isGovernmentService,
  }) {
    const result = await LicenseInfoModel.create(
      {
        employeeId,
        company,
        position,
        salaryGrade,
        stepIncrementd,
        monthlySalaray,
        from,
        to,
        isFullTime,
        isGovernmentService,
      },
      { returning: ["id"] }
    );

    return {
      status: "200",
      msg: "Licenses Information Added",
      data: result.id,
    };
  }

  async update(licenseInfo) {
    const id = licenseInfo.id;
    delete licenseInfo.id;
    const result = await LicenseInfoModel.update(licenseInfo, {
      where: { id },
    });

    return {
      status: "200",
      msg: "Licenses Information Updated",
      data: result,
    };
  }

  async delete({ id }) {
    const result = await LicenseInfoModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Licenses Information Deleted",
    };
  }
}

module.exports = new LicenseInfoServices();
