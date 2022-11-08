const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");

router
  .route("/")
  .get(incomeController.getIncomes)
  .post(incomeController.createNewIncome);

module.exports = router;
