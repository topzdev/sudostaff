const models = require("../models");

class EducBackgroundServices {
  async getOne({ id }) {
    const result = await models.EducBackground.findByPk(id);
    return {
      status: 200,
      msg: "Educational Background successfully fetched",
      data: result,
    };
  }

  async getAll({ id }) {
    const result = await models.EducBackground.findAll({
      where: { employeeId: id },
    });

    return {
      status: 200,
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
    const result = await models.EducBackground.create(
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
      status: 200,
      msg: "Educational Background Added",
      data: result.id,
    };
  }

  async update(EducBackground) {
    const id = EducBackground.id;
    delete EducBackground.id;
    const result = await models.EducBackground.update(EducBackground, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Educational Background Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await models.EducBackground.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Educational Background Deleted",
    };
  }
}

module.exports = new EducBackgroundServices();
