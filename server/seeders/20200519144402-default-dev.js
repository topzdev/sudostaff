/* To run this type "npx sequelize-cli db:seed:all" on command line */

const photoData = require("../data/photos.json");
const departmentsData = require("../data/departments.json");
const designationsData = require("../data/designations.json");
const employeesData = require("../data/employees.json");
const leaveTypesData = require("../data/leaveTypes.json");
const departmentHeadsData = require("../data/departmentHead.json");
const benifitsData = require("../data/benifits.json");
const addressData = require("../data/addressDetails.json");
const governmentData = require("../data/governmentIds.json");
const familyData = require("../data/familyDetails.json");
module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(departmentsData, designationsData);
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        // queryInterface.bulkInsert("photos", photoData, {
        //   transaction: t,
        // }),
        queryInterface.bulkInsert("departments", departmentsData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("designations", designationsData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("benifits", benifitsData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("addresses", addressData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("governmentIds", governmentData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("familyDetails", familyData, {
          transaction: t,
        }),

        // queryInterface.bulkInsert("employees", employeesData, {
        //   transaction: t,
        // }),

        queryInterface.bulkInsert("leaveTypes", leaveTypesData, {
          transaction: t,
        }),

        queryInterface.bulkInsert("departmentHeads", departmentHeadsData, {
          transaction: t,
        }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        // queryInterface.bulkDelete("photos", null, {
        //   transaction: t,
        // }),
        queryInterface.bulkDelete("departments", null, {
          transaction: t,
        }),
        queryInterface.bulkDelete("designations", null, {
          transaction: t,
        }),
        queryInterface.bulkDelete("benifits", null, {
          transaction: t,
        }),
        queryInterface.bulkDelete("addresses", null, {
          transaction: t,
        }),
        queryInterface.bulkDelete("governmentIds", null, {
          transaction: t,
        }),
        queryInterface.bulkDelete("familyDetails", null, {
          transaction: t,
        }),
        // queryInterface.bulkDelete("employees", null, {
        //   transaction: t,
        // }),
        queryInterface.bulkDelete("leaveTypes", null, {
          transaction: t,
        }),
        queryInterface.bulkDelete("departmentHeads", null, {
          transaction: t,
        }),
      ]);
    });
  },
};
