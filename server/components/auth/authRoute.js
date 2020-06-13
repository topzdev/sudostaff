const Express = require("express");
const router = Express.Router();
const controller = require("./AuthController");
const { auth } = require("../../middleware");

router.post("/login", controller.login);
router.post("/logout", auth, controller.logout);
router.get("/user", auth, controller.getUser);

module.exports = router;
