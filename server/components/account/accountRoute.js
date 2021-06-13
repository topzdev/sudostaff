const Express = require("express");
const router = Express.Router();
const controller = require("./AccountController");
const { auth } = require("../../middleware");

router.get("/:id", controller.getAccount);
router.put("/change-password", auth, controller.updatePassword);
router.put("/change-username", auth, controller.updateUsername);
router.put("/reset", auth, controller.resetAccount);
router.post("/create", auth, controller.create);
router.post("/set-admin", controller.setAsAdmin);

module.exports = router;
