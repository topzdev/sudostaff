const GovernmentIdsModel = require("./GovernmentIdsModel");

class GovernmentIdsServices {
  async getOne({ id }) {
    const result = await GovernmentIdsModel.findOne({ where: { id } });

    return {
      status: "200",
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
    const result = await GovernmentIdsModel.create(
      {
        governmentIssueId,
        idLicensePassportId,
        dateIssuance,
        placeIssuance,
      },
      { returning: ["id"] }
    );

    return {
      status: "200",
      msg: "Goverment Ids Information Added",
      data: result.id,
    };
  }

  async update(governmentIdsInfo) {
    const id = governmentIdsInfo.id;
    delete governmentIdsInfo.id;
    const result = await GovernmentIdsModel.update(governmentIdsInfo, {
      where: { id },
    });

    return {
      status: "200",
      msg: "Goverment Ids Information Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await GovernmentIdsModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Benifits Information Deleted",
    };
  }
}

module.exports = new GovernmentIdsServices();
