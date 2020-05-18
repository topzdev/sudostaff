const EducBackgroundModel = require("./EducBackgroundModel");

class EducBackgroundServices {
  async getAll({ id }) {
    const result = await EducBackgroundModel.findAll({
      where: { employeeId: id },
    });

    return {
      status: "200",
      msg: "Educational Background Fetched Successfully",
      data: result,
    };
  }

  async create({
    employeeId,
    level,
    degree,
    schoolName,
    from,
    to,
    graduateYear,
    recognition,
    scholarship,
  }) {
    const result = await EducBackgroundModel.create(
      {
        employeeId,
        level,
        degree,
        schoolName,
        from,
        to,
        graduateYear,
        recognition,
        scholarship,
      },
      { returning: ["id"] }
    );

    return {
      status: "200",
      msg: "Educational Background Added",
      data: result.id,
    };
  }

  async update(EducBackground) {
    const id = EducBackground.id;
    delete EducBackground.id;
    const result = await EducBackgroundModel.update(EducBackground, {
      where: { id },
    });

    return {
      status: "200",
      msg: "Educational Background Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await EducBackgroundModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Educational Background Deleted",
    };
  }
}

module.exports = new EducBackgroundServices();
