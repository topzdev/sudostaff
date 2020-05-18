const VoluntaryExpModel = require("./VoluntaryExpModel");

class VoluntaryExpServices {
  async getAll({ id }) {
    const result = await VoluntaryExpModel.findAll({
      where: { employeeId: id },
    });

    return {
      status: "200",
      msg: "Voluntary Experiences Fetched Successfully",
      data: result,
    };
  }

  async create(VoluntaryExp) {
    const result = await VoluntaryExpModel.create(VoluntaryExp, {
      returning: ["id"],
    });

    console.log(result, VoluntaryExpArray);
    return {
      status: "200",
      msg: "Voluntary Experiences Added",
      data: result,
    };
  }

  async update(VoluntaryExp) {
    const id = VoluntaryExp.id;
    delete VoluntaryExp.id;
    const result = await VoluntaryExpModel.update(VoluntaryExp, {
      where: { id },
    });

    return {
      status: "200",
      msg: "Voluntary Experiences Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await VoluntaryExpModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Voluntary Experiences Deleted",
    };
  }
}

module.exports = new VoluntaryExpServices();
