const benifitsController = require("./BenifitsController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", benifitsController.fetchSingleBenifits);
router.put("/", benifitsController.updateBenifits);
router.post("/", benifitsController.createBenifits);
router.delete("/:id", benifitsController.deleteBenifits);

module.exports = router;
