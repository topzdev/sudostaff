const TrainingProgramsModel = require("./TrainingProgramsModel");

class TrainingProgramsServices {
  async getAll({ id }) {
    const result = await TrainingProgramsModel.findAll({
      where: { employeeId: id },
    });

    return {
      status: 200,
      msg: "Training Programs Fetched Successfully",
      data: result,
    };
  }

  async create({ employeeId, totalHours, type, sponsor, from, to, title }) {
    const result = await TrainingProgramsModel.create(
      {
        employeeId,
        totalHours,
        type,
        sponsor,
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
    const result = await TrainingProgramsModel.update(TrainingPrograms, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Training Programs Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await TrainingProgramsModel.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Training Programs Deleted",
    };
  }
}

module.exports = new TrainingProgramsServices();
