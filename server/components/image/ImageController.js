const { validateResponse } = require("../../helpers/validateResponse");
const imageServices = require("./ImageServices");

class ImageController {
  async fetchSingleImage(req, res) {
    try {
      console.log(req.params);
      const result = await imageServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async createImage(req, res) {
    try {
      const result = await imageServices.create(req.files["profile"]);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async updateImage(req, res) {
    try {
      const result = await imageServices.update({
        rawImage: req.files["profile"],
        ...req.body,
      });
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async deleteImage(req, res) {
    try {
      const result = await imageServices.delete(req.params.id);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }
}

module.exports = new ImageController();
