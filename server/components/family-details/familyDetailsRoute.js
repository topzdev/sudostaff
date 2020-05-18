const familyDetailsController = require("./FamilyDetailsController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", familyDetailsController.fetchFamilyDetails);
router.put("/", familyDetailsController.updateFamilyDetails);
router.post("/", familyDetailsController.createFamilyDetails);
router.delete("/:id", familyDetailsController.deleteFamilyDetails);

module.exports = router;
