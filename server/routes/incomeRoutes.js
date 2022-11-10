const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");

router
  .route("/")
  .get(incomeController.getIncomes)
  .post(incomeController.createNewIncome)
  .delete(incomeController.deleteIncome);

module.exports = router;
