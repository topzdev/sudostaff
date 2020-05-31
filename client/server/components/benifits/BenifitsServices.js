const BenifitsModel = require("./BenifitsModel");

class BenifitsServices {
  async getOne({ id }) {
    const result = await BenifitsModel.findOne({ where: { id } });

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
    const result = await BenifitsModel.create(
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

    const result = await BenifitsModel.update(benifitsInfo, { where: { id } });

    return {
      status: 200,
      msg: "Benifits Information Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await BenifitsModel.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Benifits Information Deleted",
    };
  }
}

module.exports = new BenifitsServices();
