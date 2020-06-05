const { validateResponse } = require("../../helpers/validateResponse");
const FamilyDetailsServices = require("./FamilyDetailsServices");

class FamilyDetailsController {
  constructor() {
    console.log("Family Details Controller");
  }
  async fetchFamilyDetails(req, res) {
    try {
      console.log(req.body);
      const result = await FamilyDetailsServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async createFamilyDetails(req, res) {
    try {
      console.log(req.body);
      const result = await FamilyDetailsServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateFamilyDetails(req, res) {
    try {
      const result = await FamilyDetailsServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteFamilyDetails(req, res) {
    try {
      const result = await FamilyDetailsServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new FamilyDetailsController();
