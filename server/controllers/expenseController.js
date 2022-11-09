const Expense = require("../models/Expense");
const jwt_decode = require("jwt-decode");
const asyncHandler = require("express-async-handler");

const createExpense = async (req, res) => {
  const { username, category, amount, date } = req.body;

  const expense = await Expense.create({ category, username, amount, date });

  if (expense) {
    return res.status(201).json({ message: "New expense created" });
  } else {
    return res.status(400).json({ message: "Invalid expense data received" });
  }
};

const getExpenses = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;

  const expenses = await Expense.find({ username: username })
    .select("-username")
    .lean();

  res.json({ expenses });
});

module.exports = {
  createExpense,
  getExpenses,
};
