const mongoose = require("mongoose");

const goalPaymentSchema = new mongoose.Schema(
  {
    goalId: String,
    deposit: Number,
    date: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("GoalPayment", goalPaymentSchema);
