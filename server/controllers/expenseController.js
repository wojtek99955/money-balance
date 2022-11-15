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

  const page = req.query.p;
  const expensesPerPage = 5;

  const expensesCount = await Expense.find({ username }).count();

  const expenses = await Expense.find({ username })
    .skip(page * expensesPerPage)
    .limit(expensesPerPage)
    .sort({ createdAt: -1 })
    .select("-username")
    .lean();

  res.json({
    expenses: expenses,
    totalPages: Math.ceil(expensesCount / expensesPerPage),
  });
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

const updateExpense = async (req, res) => {
  const { id, amount, category, username } = req.body;

  const expense = await Expense.findById(id).exec();

  // if (expense) {
  //   return res.status(400).json({ message: "Expense not found" });
  // }
  console.log(expense);
  expense.amount = amount;
  expense.category = category;
  expense.username = username;

  const updatedExpense = await expense.save();

  res.json(` Expense with ID '${updatedExpense.id}' updated`);
};

const getLatestExpenses = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;

  const expenses = await Expense.find({ username: username })
    .limit(3)
    .select("-username")
    .sort({ createdAt: -1 })
    .lean();
  console.log(expenses);
  res.json({ expenses });
});

const getTotalExpense = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;

  const totalExpense = await Expense.aggregate([
    { $match: { username: username } },
    {
      $group: { _id: "$name", totalExpense: { $sum: "$amount" } },
    },
  ]);

  res.json({ totalExpense: totalExpense });
});

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
  getLatestExpenses,
  getTotalExpense,
};
