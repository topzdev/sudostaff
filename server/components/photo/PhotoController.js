const { validateResponse } = require("../../helpers/validateResponse");
const photoServices = require("./PhotoServices");

class PhotoController {
  async fetchSinglePhoto(req, res) {
    try {
      console.log(req.params);
      const result = await photoServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async createPhoto(req, res) {
    try {
      const result = await photoServices.create(req.files["profile"]);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async updatePhoto(req, res) {
    try {
      const result = await photoServices.update({
        rawPhoto: req.files["profile"],
        ...req.body,
      });
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async deletePhoto(req, res) {
    try {
      const result = await photoServices.delete(req.params.id);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }
}

module.exports = new PhotoController();
