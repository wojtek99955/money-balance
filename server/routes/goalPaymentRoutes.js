const express = require("express");
const router = express.Router();
const goalPaymentController = require("../controllers/goalPaymentController");

router
  .route("/")
  .get(goalPaymentController.getPayments)
  .post(goalPaymentController.createNewPayment);

module.exports = router;
