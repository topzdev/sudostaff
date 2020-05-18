const AddressModel = require("./AddressModel");

class AddressServices {
  async getOne({ id }) {
    const result = await AddressModel.findOne({ where: { id } });

    return {
      status: "200",
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
    zipcode,
    houseBlock2,
    street2,
    subdivision2,
    barangay2,
    city2,
    zipcode2,
  }) {
    const result = await AddressModel.create(
      {
        houseBlock,
        street,
        subdivision,
        barangay,
        city,
        zipcode,
        houseBlock2,
        street2,
        subdivision2,
        barangay2,
        city2,
        zipcode2,
      },
      { returning: ["id"] }
    );

    return {
      status: "200",
      msg: "Address Information Added",
      data: result.id,
    };
  }

  async update(AddressInfo) {
    const id = AddressInfo.id;
    delete AddressInfo.id;

    const result = await AddressModel.update(AddressInfo, { where: { id } });

    return {
      status: "200",
      msg: "Address Information Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await AddressModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Address Information Deleted",
    };
  }
}

module.exports = new AddressServices();
