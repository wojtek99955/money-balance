const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    userId: String,
    description: String,
    amount: Number,
    date: String,
    deposit: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);