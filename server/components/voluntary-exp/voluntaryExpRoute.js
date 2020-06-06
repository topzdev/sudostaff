const voluntaryExpController = require("./VoluntaryExpController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", voluntaryExpController.fetchVoluntaryExp);
router.get("/single/:id", voluntaryExpController.fetchSingleVoluntaryExp);
router.put("/", voluntaryExpController.updateVoluntaryExp);
router.post("/", voluntaryExpController.createVoluntaryExp);
router.delete("/:id", voluntaryExpController.deleteVoluntaryExp);

module.exports = router;
