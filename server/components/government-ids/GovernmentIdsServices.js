const models = require("../models");

class GovernmentIdsServices {
  async getOne({ id }) {
    const result = await models.GovernmentIds.findOne({ where: { id } });

    return {
      status: 200,
      msg: "Government Ids Informantion Fetched Successfully",
      data: result,
    };
  }

  async create({
    governmentIssueId,
    idLicensePassportId,
    dateIssuance,
    placeIssuance,
  }) {
    const result = await models.GovernmentIds.create(
      {
        governmentIssueId,
        idLicensePassportId,
        dateIssuance,
        placeIssuance,
      },
      { returning: ["id"] }
    );

    return result.id;
  }

  async update(governmentIdsInfo) {
    const id = governmentIdsInfo.id;
    delete governmentIdsInfo.id;
    const result = await models.GovernmentIds.update(governmentIdsInfo, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Goverment Ids Information Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await models.GovernmentIds.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Benifits Information Deleted",
    };
  }
}

module.exports = new GovernmentIdsServices();
