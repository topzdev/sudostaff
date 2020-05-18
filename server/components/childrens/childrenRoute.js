const Express = require("express");
const router = Express.Router();
const childrenController = require("./ChildrenController");

router.get("/:id", childrenController.fetchChildrens);
router.put("/", childrenController.updateChildren);
router.post("/", childrenController.createChildren);
router.delete("/:id", childrenController.deleteChildren);

module.exports = router;
