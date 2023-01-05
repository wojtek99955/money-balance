const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    category: String,
    amount: Number,
    userId: String,
    date: String,
    dateAdded: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
