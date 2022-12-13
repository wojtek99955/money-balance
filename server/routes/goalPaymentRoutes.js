const express = require("express");
const router = express.Router();
const goalPaymentController = require("../controllers/goalPaymentController");

router.route("/").post(goalPaymentController.createNewPayment);

module.exports = router;
