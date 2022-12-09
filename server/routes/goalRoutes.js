const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goalController");

router
  .route("/")
  .post(expenseController.createNewGoal)
  .delete(expenseController.deleteExpense)
  .patch(expenseController.updateExpense);

module.exports = router;
