const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    category: String,
    amount: Number,
    userId: String,
    date: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
