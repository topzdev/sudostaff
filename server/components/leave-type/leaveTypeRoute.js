const Express = require("express");
const router = Express.Router();
const controller = require("./LeaveTypeController");

router.get("/:id", controller.fetchSingleLeaveType);
router.get("/", controller.fetchLeaveTypes);
router.post("/", controller.createLeaveType);
router.put("/", controller.updateLeaveType);
router.delete("/perma/:id", controller.deleteLeaveType);

module.exports = router;
