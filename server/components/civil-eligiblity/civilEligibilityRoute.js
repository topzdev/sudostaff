const Express = require("express");
const router = Express.Router();
const civilEligController = require("./CivilEligibilityController");

router.get("/:id", civilEligController.fetchCivilEligibilitys);
router.get("/single/:id", civilEligController.fetchSingleCivilEligibilitys);
router.put("/", civilEligController.updateCivilEligibility);
router.post("/", civilEligController.createCivilEligibility);
router.delete("/:id", civilEligController.deleteCivilEligibility);

module.exports = router;
