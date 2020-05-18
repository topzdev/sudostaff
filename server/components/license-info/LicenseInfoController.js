const { validateResponse } = require("../../helpers/validateResponse");
const LicenseInfoServices = require("./LicenseInfoServices");

class LicenseInfoController {
  constructor() {
    console.log("License Controller");
  }
  async fetchLicenseInfos(req, res) {
    try {
      const result = await LicenseInfoServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
  async fetchSingleLicenseInfo(req, res) {
    try {
      console.log(req.params);
      const result = await LicenseInfoServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async createLicenseInfo(req, res) {
    try {
      console.log(req.body);
      const result = await LicenseInfoServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async updateLicenseInfo(req, res) {
    try {
      const result = await LicenseInfoServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async deleteLicenseInfo(req, res) {
    try {
      const result = await LicenseInfoServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
}

module.exports = new LicenseInfoController();
