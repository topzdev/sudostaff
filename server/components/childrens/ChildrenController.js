const { validateResponse } = require("../../helpers/validateResponse");
const ChildrenServices = require("./ChildrensServices");

class ChildrenController {
  constructor() {
    console.log("Childrens Controller");
  }
  async fetchChildrens(req, res) {
    try {
      const result = await ChildrenServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async createChildren(req, res) {
    try {
      const result = await ChildrenServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async updateChildren(req, res) {
    try {
      const result = await ChildrenServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async deleteChildren(req, res) {
    try {
      const result = await ChildrenServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
}

module.exports = new ChildrenController();
