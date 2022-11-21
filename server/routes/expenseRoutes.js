const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

router
  .route("/")
  .get(expenseController.getExpenses)
  .post(expenseController.createExpense)
  .delete(expenseController.deleteExpense)
  .patch(expenseController.updateExpense);
router.get("/latest", expenseController.getLatestExpenses);
router.get("/total", expenseController.getTotalExpense);
router.get("/sumCategories", expenseController.getSumCategories);
router.get("/getDailySum", expenseController.getDailySum);

module.exports = router;
