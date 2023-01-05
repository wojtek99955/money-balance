const mongoose = require("mongoose");

const expsenseSchema = new mongoose.Schema(
  {
    userId: String,
    category: String,
    amount: Number,
    date: String,
    dateAdded: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expsenseSchema);
