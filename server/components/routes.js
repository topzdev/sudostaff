const Express = require("express");
const router = Express.Router();
const swaggerUi = require("swagger-ui-express");
const apiDocs = require("./apiDocs.json");

/**
 * Humand Resources API Documentation
 * see ./apiDocs.json
 * or visit http://localhost:5000/hr/api/api-docs/
 */
const employeeRouter = require("./employee/employeeRoute");
const departmentRouter = require("./department/departmentRoute");
const designationRouter = require("./designation/designationRoute");
const leaveTypeRouter = require("./leave-type/leaveTypeRoute");
const leaveRequestRouter = require("./leave-request/leaveRequestRoute");
const attendanceRouter = require("./attendance/attendanceRoute");
const benifitsRouter = require("./benifits/benifitsRoute");
const govermentIdsRouter = require("./government-ids/governmentIdsRoute");
const addressRouter = require("./address/addressRoute");
const workExpRouter = require("./work-experience/WorkExpRoute");
const voluntaryExpRouter = require("./voluntary-exp/voluntaryExpRoute");
const trainingProgramsRouter = require("./training-programs/trainingProgramsRoute");
const educBackgroundRouter = require("./educational-background/educBackgroundRoute");
const civilEligibilityRouter = require("./civil-eligiblity/civilEligibilityRoute");
const familyDetails = require("./family-details/familyDetailsRoute");
const childrensRouter = require("./childrens/childrenRoute");
const photoRouter = require("./photo/photoRoute");
const mailerRouter = require("./mailer/mailerRoute");
const accountRouter = require("./account/accountRoute");
const authRouter = require("./auth/authRoute");

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(apiDocs));

router.use("/employee", employeeRouter);
router.use("/account", accountRouter);
router.use("/auth", authRouter);
router.use("/attendance", attendanceRouter);
router.use("/department", departmentRouter);
router.use("/designation", designationRouter);
router.use("/leave-type", leaveTypeRouter);
router.use("/leave-request", leaveRequestRouter);
router.use("/goverment-ids", govermentIdsRouter);
router.use("/benifits", benifitsRouter);
router.use("/family-details", familyDetails);
router.use("/work-exp", workExpRouter);
router.use("/voluntary-exp", voluntaryExpRouter);
router.use("/training-programs", trainingProgramsRouter);
router.use("/educational-background", educBackgroundRouter);
router.use("/civil-eligibility", civilEligibilityRouter);
router.use("/childrens", childrensRouter);
router.use("/address", addressRouter);
router.use("/photo", photoRouter);
router.use("/mailer", mailerRouter);

module.exports = router;
