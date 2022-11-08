const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    type: String,
    amount: Number,
    username: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
