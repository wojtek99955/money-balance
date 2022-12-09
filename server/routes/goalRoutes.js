const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

router
  .route("/")
  .get(goalController.getGoals)
  .post(goalController.createNewGoal);

module.exports = router;
