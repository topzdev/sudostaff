const trainingProgramsController = require("./TrainingProgramsController");
const Express = require("express");
const router = Express.Router();

router.get("/:id", trainingProgramsController.fetchTrainingPrograms);
router.get(
  "/single/:id",
  trainingProgramsController.fetchSingleTrainingPrograms
);
router.put("/", trainingProgramsController.updateTrainingPrograms);
router.post("/", trainingProgramsController.createTrainingPrograms);
router.delete("/:id", trainingProgramsController.deleteTrainingPrograms);

module.exports = router;
