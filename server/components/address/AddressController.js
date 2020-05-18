const { validateResponse } = require("../../helpers/validateResponse");
const AddressServices = require("./AddressServices");

class AddressController {
  constructor() {
    console.log("Address Controller");
  }
  async fetchSingleAddress(req, res) {
    try {
      console.log(req.body);
      const result = await AddressServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async createAddress(req, res) {
    try {
      console.log(req.body);
      const result = await AddressServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async updateAddress(req, res) {
    try {
      const result = await AddressServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async deleteAddress(req, res) {
    try {
      const result = await AddressServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
}

module.exports = new AddressController();
