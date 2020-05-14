const employeeController = require("../controllers/EmployeeController");
const Express = require("express");
const router = Express.Router();

router.post("/", employeeController.createEmployee);

module.exports = router;
