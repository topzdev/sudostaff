const models = require("../models");

class FamilyDetailsServices {
  async getOne({ id }) {
    const result = await models.FamilyDetails.findByPk(id);

    return {
      status: 200,
      msg: "Family details successfully fetched",
      data: result,
    };
  }

  async create(familyDetailsInfo) {
    const result = await models.FamilyDetails.create(familyDetailsInfo, {
      returning: ["id"],
    });

    return result.id;
  }

  async update(familyDetailsInfo) {
    const result = await models.FamilyDetails.update(familyDetailsInfo, {
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
    const result = await models.FamilyDetails.destroy({ where: { id } });

    return {
      status: 200,
      msg: "Family details successfully deleted",
    };
  }
}

module.exports = new FamilyDetailsServices();
