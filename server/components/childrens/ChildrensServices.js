const ChildrensModel = require("./ChildrensModel");

class ChildrensServices {
  async getAll({ id }) {
    const result = await ChildrensModel.findAll({ where: { employeeId: id } });
    return {
      status: 200,
      msg: "Childrens successfully fetched",
      data: result,
    };
  }

  async create({ employeeId, fullName, birthDate }) {
    const result = await ChildrensModel.create(
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
    const result = await ChildrensModel.update(childrenInfo, { where: { id } });
    return {
      status: 200,
      msg: "Childrens Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    const result = await ChildrensModel.destroy({
      where: { id },
    });

    return {
      status: 200,
      msg: "Childrens Deleted",
    };
  }
}

module.exports = new ChildrensServices();
