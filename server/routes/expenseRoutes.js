const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

router
  .route("/")
  .get(expenseController.getExpenses)
  .post(expenseController.createExpense)
  .delete(expenseController.deleteExpense);

module.exports = router;
