const models = require("../models");

class AddressServices {
  async getOne({ id }) {
    const result = await models.Address.findOne({ where: { id } });

    return {
      status: 200,
      msg: "Address Fetched Successfully",
      data: result,
    };
  }

  async create({
    houseBlock,
    street,
    subdivision,
    barangay,
    city,
    province,
    zipcode,
    houseBlock2,
    street2,
    subdivision2,
    barangay2,
    city2,
    province2,
    zipcode2,
  }) {
    const result = await models.Address.create(
      {
        houseBlock,
        street,
        subdivision,
        barangay,
        city,
        province,
        zipcode,
        houseBlock2,
        street2,
        subdivision2,
        barangay2,
        city2,
        province2,
        zipcode2,
      },
      { returning: ["id"] }
    );

    return result.id;
  }

  async update(AddressInfo) {
    const id = AddressInfo.id;
    delete AddressInfo.id;

    const result = await models.Address.update(AddressInfo, { where: { id } });

    return {
      status: 200,
      msg: "Address Information Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await models.Address.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Address Information Deleted",
    };
  }
}

module.exports = new AddressServices();
