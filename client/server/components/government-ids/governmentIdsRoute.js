const governmentIdsController = require("./GovernmentIdsController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", governmentIdsController.fetchSingleGovernmentIds);
router.put("/", governmentIdsController.updateGovernmentIds);
router.post("/", governmentIdsController.createGovernmentIds);
router.delete("/:id", governmentIdsController.deleteGovernmentIds);

module.exports = router;
