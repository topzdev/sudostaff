const Express = require("express");
const router = Express.Router();
const controller = require("./DepartmentController");

router.get("/:id", controller.fetchSingleDisignation);
router.get("/", controller.fetchDepartments);
router.post("/", controller.createDepartment);
router.put("/", controller.updateDepartment);
router.delete("/perma/:id", controller.deleteDepartment);

module.exports = router;
