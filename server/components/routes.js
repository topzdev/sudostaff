const Express = require("express");
const router = Express.Router();

const employeeRouter = require("./employee/employeeRoute");
const departmentRouter = require("./department/departmentRoute");
const designationRouter = require("./designation/designationRoute");
const leaveTypeRouter = require("./leave-type/leaveTypeRoute");
const leaveRequestRouter = require("./leave-request/leaveRequestRoute");
const attendanceRouter = require("./attendance/attendanceRoute");
const benifitsRouter = require("./benifits/benifitsRoute");
const govermentIdsRouter = require("./government-ids/governmentIdsRoute");
const addressRouter = require("./address/addressRoute");

const licenseInfoRouter = require("./license-info/licenseInfoRoute");
const voluntaryExpRouter = require("./voluntary-exp/voluntaryExpRoute");
const trainingProgramsRouter = require("./training-programs/trainingProgramsRoute");
const educBackgroundRouter = require("./educational-background/educBackgroundRoute");
const civilEligibilityRouter = require("./civil-eligiblity/civilEligibilityRoute");
const childrensRouter = require("./childrens/childrenRoute");
const imageRouter = require("./image/imageRoute");
const mailerRouter = require("./mailer/mailerRoute");

router.use("/attendance", attendanceRouter);
router.use("/employee", employeeRouter);
router.use("/department", departmentRouter);
router.use("/designation", designationRouter);
router.use("/leave-type", leaveTypeRouter);
router.use("/leave-request", leaveRequestRouter);
router.use("/goverment-ids", govermentIdsRouter);
router.use("/benifits", benifitsRouter);
router.use("/license-info", licenseInfoRouter);
router.use("/voluntary-exp", voluntaryExpRouter);
router.use("/training-programs", trainingProgramsRouter);
router.use("/educational-background", educBackgroundRouter);
router.use("/civil-eligibility", civilEligibilityRouter);
router.use("/childrens", childrensRouter);
router.use("/address", addressRouter);
router.use("/image", imageRouter);
router.use("/mailer", mailerRouter);

module.exports = router;
