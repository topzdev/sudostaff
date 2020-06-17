const models = require("../models");

class ChildrensServices {
  async getOne({ id }) {
    const result = await models.Childrens.findByPk(id);
    return {
      status: 200,
      msg: "Children successfully fetched",
      data: result,
    };
  }

  async getAll({ id }) {
    const result = await models.Childrens.findAll({
      where: { employeeId: id },
    });
    return {
      status: 200,
      msg: "Childrens successfully fetched",
      data: result,
    };
  }

  async create({ employeeId, fullName, birthDate }) {
    const result = await models.Childrens.create(
      { employeeId, fullName, birthDate },
      { returning: ["id"] }
    );
    return {
      status: 200,
      msg: "Childrens Added",
      data: result.id,
    };
  }

  async update(childrenInfo) {
    const id = childrenInfo.id;
    delete childrenInfo.id;
    const result = await models.Childrens.update(childrenInfo, {
      where: { id },
    });
    return {
      status: 200,
      msg: "Childrens Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await models.Childrens.destroy({
      where: { id },
    });

    return {
      status: 200,
      msg: "Childrens Deleted",
    };
  }
}

module.exports = new ChildrensServices();
