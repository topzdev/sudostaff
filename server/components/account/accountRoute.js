const Express = require("express");
const router = Express.Router();
const controller = require("./AccountController");
const { auth } = require("../../middleware");

router.put("/change-password", auth, controller.updatePassword);
router.put("/reset", auth, controller.resetAccount);
router.post("/create", auth, controller.create);

module.exports = router;
