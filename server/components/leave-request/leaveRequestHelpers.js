const Sequelize = require("sequelize");
const LeaveRequestModel = require("./LeaveRequestModel");
const LeaveTypeModel = require("../leave-type/LeaveTypeModel");
const PhotoModel = require("../photo/PhotoModel");
const EmployeeModel = require("../employee/EmployeeModel");
const dayjs = require("dayjs");
const Op = Sequelize.Op;

const TOTAL_LEAVE_CREDIT = 5;

exports.isExist = async (id) => {
  /** Check if the leave application is exist */
  const result = await LeaveRequestModel.count({ where: { id } });
  return result ? true : false;
};

exports.isPending = async (employeeId) => {
  /** Check if the current employee is in active means that there is a active or pending application that the employee is submitted */
  const result = await LeaveRequestModel.count({
    where: {
      employeeId,
      status: "pending",
    },
  });

  return result ? true : false;
};

exports.hasUpcoming = async (employeeId) => {
  const result = await LeaveRequestModel.count(this.upcomingOption(employeeId));

  return result ? true : false;
};

const overallCount = async ({ employeeId }) => {
  let where = {};

  if (employeeId) where.employeeId = employeeId;

  return {
    pending: await LeaveRequestModel.count({
      where: { ...where, status: "pending" },
    }),
    rejected: await LeaveRequestModel.count({
      where: { ...where, status: "rejected" },
    }),
    approved: await LeaveRequestModel.count({
      where: { ...where, status: "approved" },
    }),
    overall: await LeaveRequestModel.count({
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

  const balance = await LeaveRequestModel.count({
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
      model: LeaveTypeModel,
      attributes: ["id", "name"],
    });

  if (withEmployee)
    tables.push({
      model: EmployeeModel,
      as: "submittedBy",
      attributes: ["firstName", "lastName", "fullName", "id", "photoId"],
      include: [
        {
          model: PhotoModel,
        },
      ],
    });

  tables.push({
    model: EmployeeModel,
    foreignKey: "authorizedPersonId",
    as: "authorizedBy",
    attributes: ["firstName", "lastName", "fullName", "id", "photoId"],
    include: [
      {
        model: PhotoModel,
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
