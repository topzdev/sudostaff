const { validateResponse } = require("../../helpers/validateResponse");
const CivilEligibilityServices = require("./CivilEligiblityServices");

class CivilEligibilityController {
  constructor() {
    console.log("Civil Eligibility Controller");
  }
  async fetchSingleCivilEligibilitys(req, res) {
    try {
      const result = await CivilEligibilityServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchCivilEligibilitys(req, res) {
    try {
      const result = await CivilEligibilityServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async createCivilEligibility(req, res) {
    try {
      const result = await CivilEligibilityServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateCivilEligibility(req, res) {
    try {
      const result = await CivilEligibilityServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteCivilEligibility(req, res) {
    try {
      const result = await CivilEligibilityServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new CivilEligibilityController();
