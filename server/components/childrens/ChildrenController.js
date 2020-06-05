const { validateResponse } = require("../../helpers/validateResponse");
const ChildrenServices = require("./ChildrensServices");

class ChildrenController {
  constructor() {
    console.log("Childrens Controller");
  }
  async fetchSingleChildrens(req, res) {
    try {
      const result = await ChildrenServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchChildrens(req, res) {
    try {
      const result = await ChildrenServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async createChildren(req, res) {
    try {
      const result = await ChildrenServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateChildren(req, res) {
    try {
      const result = await ChildrenServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteChildren(req, res) {
    try {
      const result = await ChildrenServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new ChildrenController();
