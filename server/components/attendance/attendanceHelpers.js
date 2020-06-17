const models = require("../models");
const Op = models.Sequelize.Op;

exports.isAlreadyTimeIn = async (employeeId) => {
  /** Check if the employeeId is already in attendance within the current day using createAt */

  const result = await models.Attendance.findOne({
    attributes: ["id", "employeeId", "signInTime", "signOutTime"],
    where: {
      employeeId,
      createdAt: {
        /*  gets the initital time of the current day for example the date 05/17/2020 18:57:05 convertsto 05/17/2020 00:00:00
        
        visit the link: https://www.postgresql.org/docs/9.1/functions-datetime.html#FUNCTIONS-DATETIME-TRUNC
        **/
        [Op.gte]: Sequelize.fn("date_trunc", "day", Sequelize.fn("NOW")),
      },
    },
  });

  return result.get({ plain: true });
};

exports.isAlreadyTimeOut = async (employeeId) => {};

exports.parseCondition = ({ date, employeeId }) => {
  const condition = {};

  if (date)
    condition.where.createdAt = {
      [Op.gte]: Sequelize.fn("date_trunc", "day", date),
    };
  if (employeeId) condition.where.employeeId = employeeId;

  return condition;
};
