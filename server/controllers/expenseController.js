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

const deleteExpense = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: "Expense ID required" });
  }

  const expense = await Expense.findById(id).exec();

  if (!expense) {
    return res.status(400).json({ message: "Expense not found" });
  }

  const result = await expense.deleteOne();

  const reply = `Expense ${result.title} with ID ${result._id} deleted`;

  res.json(reply);
};

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
};
