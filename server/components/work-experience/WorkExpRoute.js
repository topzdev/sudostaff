const workExpController = require("./WorkExpController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", workExpController.fetchWorkExps);
router.get("/single/:id", workExpController.fetchSingleWorkExp);
router.put("/", workExpController.updateWorkExp);
router.post("/", workExpController.createWorkExp);
router.delete("/:id", workExpController.deleteWorkExp);

module.exports = router;
