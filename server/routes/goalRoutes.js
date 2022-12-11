const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

router
  .route("/")
  .get(goalController.getGoals)
  .post(goalController.createNewGoal)
  .delete(goalController.deleteGoal)
  .patch(goalController.updateGoal);

module.exports = router;
