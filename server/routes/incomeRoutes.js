const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");

router
  .route("/")
  .get(incomeController.getIncomes)
  .post(incomeController.createNewIncome)
  .delete(incomeController.deleteIncome)
  .patch(incomeController.updateIncome);
router.get("/latest", incomeController.getLatestIncomes);

module.exports = router;
