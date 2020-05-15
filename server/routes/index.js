const Express = require("express");
const employeeRouter = require("./employeeRoute");
const departmentRouter = require("./departmentRoute");
const designationRouter = require("./designationRoute");
const leaveTypeRouter = require("./leaveTypeRoute");
const leaveRequestRouter = require("./leaveRequestRoute");
const router = Express.Router();

router.use("/employee", employeeRouter);
router.use("/department", departmentRouter);
router.use("/designation", designationRouter);
router.use("/leave-type", leaveTypeRouter);
router.use("/leave-request", leaveRequestRouter);

module.exports = router;
