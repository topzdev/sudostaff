const FamilyDetailsModel = require("./FamilyDetailsModel");

class FamilyDetailsServices {
  async getOne({ id }) {
    const result = await FamilyDetailsModel.findByPk(id);

    return {
      status: 200,
      msg: "Family details successfully fetched",
      data: result,
    };
  }

  async create(familyDetailsInfo) {
    const result = await FamilyDetailsModel.create(familyDetailsInfo, {
      returning: ["id"],
    });

    return result.id;
  }

  async update(familyDetailsInfo) {
    const result = await FamilyDetailsModel.update(familyDetailsInfo, {
      where: { id: familyDetailsInfo.id },
      returning: ["id"],
    });

    return {
      status: 200,
      msg: "Family details successfully updated",
      data: result.id,
    };
  }

  async delete({ id }) {
    const result = await FamilyDetailsModel.destroy({ where: { id } });

    return {
      status: 200,
      msg: "Family details successfully deleted",
    };
  }
}

module.exports = new FamilyDetailsServices();
