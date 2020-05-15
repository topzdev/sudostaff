const Express = require("express");
const router = Express.Router();
const controller = require("../controllers/DesignationController");

router.get("/:id", controller.fetchSingleDesignation);
router.get("/", controller.fetchDesignations);
router.post("/", controller.createDesignation);
router.put("/", controller.updateDesignation);
router.delete("/:id", controller.removeDesignation);
router.delete("/perma/:id", controller.deleteDesignation);

module.exports = router;
