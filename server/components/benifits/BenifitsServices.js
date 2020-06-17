const models = require("../models");

class BenifitsServices {
  async getOne({ id }) {
    const result = await models.Benifits.findByPk(id);

    return {
      status: 200,
      msg: "Benifits Fetched Successfully",
      data: result,
    };
  }

  async create({
    gsisId,
    pagibigId,
    philhealthId,
    sssNo,
    tinNo,
    agencyEmployeerId,
  }) {
    const result = await models.Benifits.create(
      {
        gsisId,
        pagibigId,
        philhealthId,
        sssNo,
        tinNo,
        agencyEmployeerId,
      },
      { returning: ["id"] }
    );

    return result.id;
  }

  async update(benifitsInfo) {
    const id = benifitsInfo.id;
    delete benifitsInfo.id;

    const result = await models.Benifits.update(benifitsInfo, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Benifits Information Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await models.Benifits.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Benifits Information Deleted",
    };
  }
}

module.exports = new BenifitsServices();
