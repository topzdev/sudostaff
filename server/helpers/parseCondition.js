const Sequelize = require("sequelize");

const Op = Sequelize.Op;

module.exports = ({
  searchText,
  searchBy,
  limit,
  offset,
  include,
  exclude,
  status,
}) => {
  const options = {
    where: {},
    offset,
    limit,
  };

  if (searchText) {
    if (searchBy === "fullName")
      options.where = Sequelize.where(
        Sequelize.fn(
          "concat",
          Sequelize.col("firstName"),
          " ",
          Sequelize.col("lastName")
        ),
        {
          [Op.iLike]: `%${searchText}%`,
        }
      );
    else {
      options.where[searchBy] = {
        [Op.iLike]: `%${searchText}%`,
      };
    }
  }
  if (status) {
    options.where.status = status;
  }
  if (exclude) options.attributes = { exclude: exclude.split(",") };
  if (include) options.attributes = ["id", ...include.split(",")];

  return options;
};
