const Express = require("express");
const router = Express.Router();
const controller = require("./LeaveRequestController");

router.get("/:id", controller.fetchSingleLeaveRequest);
router.get("/employee/:id", controller.fetchLeaveRequestEmployee);
router.get("/employee/summary/:id", controller.fetchSummaryEmployee);
router.get("/employee/upcoming/:id", controller.fetchUpcomingLeave);
router.get("/", controller.fetchLeaveRequests);
router.post("/", controller.createLeaveRequest);
router.put("/", controller.updateLeaveRequestByUser);
router.put("/admin", controller.updateLeaveRequestByAdmin);
router.get("/admin/summary", controller.fetchSummaryAdmin);

module.exports = router;
