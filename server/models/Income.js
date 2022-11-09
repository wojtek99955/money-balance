const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    category: String,
    amount: Number,
    username: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
