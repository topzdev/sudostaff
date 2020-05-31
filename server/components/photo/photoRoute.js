const Express = require("express");
const router = Express.Router();
const controller = require("./PhotoController");

router.get("/:id", controller.fetchSinglePhoto);
router.post("/", controller.createPhoto);
router.put("/", controller.updatePhoto);
router.delete("/:id", controller.deletePhoto);

module.exports = router;
