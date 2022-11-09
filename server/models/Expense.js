const mongoose = require("mongoose");

const expsenseSchema = new mongoose.Schema(
  {
    username: String,
    category: String,
    amount: Number,
    date: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expsenseSchema);
