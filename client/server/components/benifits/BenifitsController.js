const { validateResponse } = require("../../helpers/validateResponse");
const BenifitsServices = require("./BenifitsServices");

class BenifitsController {
  constructor() {
    console.log("Benifits Controller");
  }
  async fetchSingleBenifits(req, res) {
    try {
      console.log(req.body);
      const result = await BenifitsServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async createBenifits(req, res) {
    try {
      console.log(req.body);
      const result = await BenifitsServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async updateBenifits(req, res) {
    try {
      const result = await BenifitsServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async deleteBenifits(req, res) {
    try {
      const result = await BenifitsServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }
}

module.exports = new BenifitsController();
