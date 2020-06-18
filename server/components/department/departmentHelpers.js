const models = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.isExist = async ({ name, id }) => {
  const condition = {};

  if (name) condition.name = name;
  if (id) condition.id = id;

  const result = await models.Department.count({ where: condition });
  console.log(result);
  return result ? true : false;
};

exports.parseCondition = ({ search, limit, offset }) => {
  const options = {
    where: {},
    offset,
    limit,
  };

  if (search) options.where.name = { [Op.like]: `%${search}%` };

  return options;
};

exports.tableJoin = () => {
  return [
    {
      model: models.DepartmentHead,
      attributes: ["id"],
      include: [
        {
          model: models.Employee,
          attributes: ["id", "firstName", "lastName", "fullName"],
          include: [
            {
              model: models.Photo,
            },
          ],
        },
      ],
    },
  ];
};
