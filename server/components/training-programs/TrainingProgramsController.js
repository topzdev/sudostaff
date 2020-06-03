const { validateResponse } = require("../../helpers/validateResponse");
const TrainingProgramsServices = require("./TrainingProgramsServices");

class TrainingProgramsController {
  constructor() {
    console.log("Training Programs Controller");
  }
  async fetchTrainingPrograms(req, res) {
    try {
      const result = await TrainingProgramsServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async createTrainingPrograms(req, res) {
    try {
      const result = await TrainingProgramsServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateTrainingPrograms(req, res) {
    try {
      const result = await TrainingProgramsServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteTrainingPrograms(req, res) {
    try {
      const result = await TrainingProgramsServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new TrainingProgramsController();
