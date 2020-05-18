const Express = require("express");
const router = Express.Router();
const controller = require("./DesignationController");

router.get("/:id", controller.fetchSingleDesignation);
router.get("/", controller.fetchDesignations);
router.post("/", controller.createDesignation);
router.put("/", controller.updateDesignation);
router.delete("/perma/:id", controller.deleteDesignation);

module.exports = router;
