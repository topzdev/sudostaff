const models = require("../models");

class VoluntaryExpServices {
  async getOne({ id }) {
    const result = await models.VoluntaryExp.findByPk(id);

    return {
      status: 200,
      msg: "Voluntary Experience Fetched Successfully",
      data: result,
    };
  }

  async getAll({ id }) {
    const result = await models.VoluntaryExp.findAll({
      where: { employeeId: id },
    });

    return {
      status: 200,
      msg: "Voluntary Experiences Fetched Successfully",
      data: result,
    };
  }

  async create(VoluntaryExp) {
    const result = await models.VoluntaryExp.create(VoluntaryExp, {
      returning: ["id"],
    });

    return {
      status: 200,
      msg: "Voluntary Experiences Added",
      data: result,
    };
  }

  async update(VoluntaryExp) {
    const id = VoluntaryExp.id;
    delete VoluntaryExp.id;
    const result = await models.VoluntaryExp.update(VoluntaryExp, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Voluntary Experiences Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await models.VoluntaryExp.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Voluntary Experiences Deleted",
    };
  }
}

module.exports = new VoluntaryExpServices();
