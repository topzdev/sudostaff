const models = require("../models");
const dayjs = require("dayjs");
const Op = models.Sequelize.Op;

const TOTAL_LEAVE_CREDIT = 5;

exports.isExist = async (id) => {
  /** Check if the leave application is exist */
  const result = await models.LeaveRequest.count({ where: { id } });
  return result ? true : false;
};

exports.isPending = async (employeeId) => {
  /** Check if the current employee is in active means that there is a active or pending application that the employee is submitted */
  const result = await models.LeaveRequest.count({
    where: {
      employeeId,
      status: "pending",
    },
  });

  return result ? true : false;
};

exports.hasUpcoming = async (employeeId) => {
  const result = await models.LeaveRequest.count(
    this.upcomingOption(employeeId)
  );

  return result ? true : false;
};

const overallCount = async ({ employeeId }) => {
  let where = {};

  if (employeeId) where.employeeId = employeeId;

  return {
    pending: await models.LeaveRequest.count({
      where: { ...where, status: "pending" },
    }),
    rejected: await models.LeaveRequest.count({
      where: { ...where, status: "rejected" },
    }),
    approved: await models.LeaveRequest.count({
      where: { ...where, status: "approved" },
    }),
    overall: await models.LeaveRequest.count({
      where: { ...where },
    }),
  };
};

exports.summaryAdmin = async () => {
  const count = await overallCount({});

  return {
    count,
  };
};

exports.summaryEmp = async (employeeId) => {
  const count = await overallCount({ employeeId });

  const balance = await models.LeaveRequest.count({
    where: {
      employeeId,
      status: {
        [Op.not]: "pending",
      },
      createdAt: {
        [Op.gte]: Sequelize.fn("date_trunc", "year", Sequelize.fn("now")),
      },
    },
  });

  return {
    count,
    balance: TOTAL_LEAVE_CREDIT - balance,
  };
};

exports.joinTable = ({ withLeaveType, withEmployee }) => {
  let tables = [];

  if (withLeaveType)
    tables.push({
      model: models.LeaveType,
      attributes: ["id", "name"],
    });

  if (withEmployee)
    tables.push({
      model: models.Employee,
      as: "submittedBy",
      attributes: ["firstName", "lastName", "fullName", "id", "photoId"],
      include: [
        {
          model: models.Photo,
        },
      ],
    });

  tables.push({
    model: models.Employee,
    foreignKey: "authorizedPersonId",
    as: "authorizedBy",
    attributes: ["firstName", "lastName", "fullName", "id", "photoId"],
    include: [
      {
        model: models.Photo,
      },
    ],
  });

  return tables;
};

exports.upcomingOption = (employeeId) => ({
  where: {
    employeeId,
    status: "approved",
    startDate: { [Op.gte]: dayjs(Date.now()).format("YYYY-MM-DD") },
  },
  order: this.order,
  include: this.joinTable({ withLeaveType: true }),
});

exports.order = [["createdAt", "DESC"]];
