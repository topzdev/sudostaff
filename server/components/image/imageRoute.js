const Express = require("express");
const router = Express.Router();
const controller = require("./ImageController");

router.get("/:id", controller.fetchSingleImage);
router.post("/", controller.createImage);
router.put("/", controller.updateImage);
router.delete("/:id", controller.deleteImage);

module.exports = router;
