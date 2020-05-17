const Express = require("express");
const router = Express.Router();
const controller = require("./LeaveRequestController");

router.get("/:id", controller.fetchSingleLeaveRequest);
router.get("/", controller.fetchLeaveRequests);
router.post("/", controller.createLeaveRequest);
router.put("/", controller.updateLeaveRequestByUser);
router.put("/admin", controller.updateLeaveRequestByAdmin);

module.exports = router;
