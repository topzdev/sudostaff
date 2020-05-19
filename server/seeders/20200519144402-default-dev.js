/* To run this type "npx sequelize-cli db:seed:all" on command line */

const departmentsData = require("../data/departments.json");
const designationsData = require("../data/designations.json");
const employeesData = require("../data/employees.json");
const leaveTypesData = require("../data/leaveTypes.json");
module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(departmentsData);
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.bulkInsert("departments", departmentsData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("designations", designationsData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("employees", employeesData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("leaveTypes", leaveTypesData, {
          transaction: t,
        }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.bulkDelete("departments", null, {
          transaction: t,
        }),
        queryInterface.bulkDelete("designations", null, {
          transaction: t,
        }),

        queryInterface.bulkDelete("employees", null, {
          transaction: t,
        }),

        queryInterface.bulkDelete("leaveTypes", null, {
          transaction: t,
        }),
      ]);
    });
  },
};
