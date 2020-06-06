const Express = require("express");
const router = Express.Router();
const educBackgroundController = require("./EducBackgroundController");

router.get("/:id", educBackgroundController.fetchEducBackground);
router.get("/single/:id", educBackgroundController.fetchSingleEducBackground);
router.put("/", educBackgroundController.updateEducBackground);
router.post("/", educBackgroundController.createEducBackground);
router.delete("/:id", educBackgroundController.deleteEducBackground);

module.exports = router;
