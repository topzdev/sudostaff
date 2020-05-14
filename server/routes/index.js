const Express = require("express");
const employeeRoute = require("./employeeRoute");
const departmentRoute = require("./departmentRoute");
const designationRouter = require("./designationRoute");
const router = Express.Router();

router.use("/employee", employeeRoute);
router.use("/department", departmentRoute);
router.use("/designation", designationRouter);

module.exports = router;
