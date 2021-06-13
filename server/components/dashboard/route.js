const dasboardController = require("./controller");
const Express = require("express");
const router = Express.Router();

router.get("/counts", dasboardController.getCounts);
router.get("/recentEmployee", dasboardController.getRecentlyAddedEmployee);
router.get("/activeLeave", dasboardController.getActiveLeaveRequest);

module.exports = router;
