const models = require("../models");

class TrainingProgramsServices {
  async getOne({ id }) {
    const result = await models.TrainingPrograms.findByPk(id);

    return {
      status: 200,
      msg: "Training Program Fetched Successfully",
      data: result,
    };
  }

  async getAll({ id }) {
    const result = await models.TrainingPrograms.findAll({
      where: { employeeId: id },
    });

    return {
      status: 200,
      msg: "Training Programs Fetched Successfully",
      data: result,
    };
  }

  async create({ employeeId, totalHours, type, sponsor, from, to, title }) {
    const result = await models.TrainingPrograms.create(
      {
        employeeId,
        totalHours,
        type,
        sponsor,
        from,
        to,
        title,
      },
      { returning: ["id"] }
    );

    return {
      status: 200,
      msg: "Training Programs Added",
      data: result.id,
    };
  }

  async update(TrainingPrograms) {
    const id = TrainingPrograms.id;
    delete TrainingPrograms.id;
    const result = await models.TrainingPrograms.update(TrainingPrograms, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Training Programs Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await models.TrainingPrograms.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Training Programs Deleted",
    };
  }
}

module.exports = new TrainingProgramsServices();
