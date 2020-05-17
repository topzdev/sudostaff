const Express = require("express");
const employeeRouter = require("./employee/employeeRoute");
const departmentRouter = require("./department/departmentRoute");
const designationRouter = require("./designation/designationRoute");
const leaveTypeRouter = require("./leave-type/leaveTypeRoute");
const leaveRequestRouter = require("./leave-request/leaveRequestRoute");
const attendanceRouter = require("./attendance/attendanceRoute");
const router = Express.Router();

router.use("/attendance", attendanceRouter);
router.use("/employee", employeeRouter);
router.use("/department", departmentRouter);
router.use("/designation", designationRouter);
router.use("/leave-type", leaveTypeRouter);
router.use("/leave-request", leaveRequestRouter);

module.exports = router;
