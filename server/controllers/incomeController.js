const Income = require("../models/Income");
const asyncHandler = require("express-async-handler");
const jwt_decode = require("jwt-decode");

const getIncomes = asyncHandler(async (req, res) => {
  // const cookie = req.headers.cookie;
  // const { username } = req.body;

  // // If no users
  // if (!incomes?.length) {
  //   return res.status(400).json({ message: "No incomes found" });
  // }

  // res.json(cookie.userData);
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;

  const incomes = await Income.find({ username: username })
    .select("-username")
    .lean();

  res.json({ incomes });
});

const createNewIncome = async (req, res) => {
  // Get all users from MongoDB
  const { username, category, amount, date } = req.body;

  const income = await Income.create({ category, username, amount, date });

  if (income) {
    // Created
    return res.status(201).json({ message: "New income created" });
  } else {
    return res.status(400).json({ message: "Invalid income data received" });
  }
};

const deleteIncome = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: "Expense ID required" });
  }

  const income = await Income.findById(id).exec();

  if (!income) {
    return res.status(400).json({ message: "Expense not found" });
  }

  const result = await income.deleteOne();

  const reply = `Income ${result.title} with ID ${result._id} deleted`;

  res.json(reply);
};

const updateIncome = async (req, res) => {
  const { id, amount, category, username } = req.body;

  const income = await Income.findById(id).exec();

  // if (income) {
  //   return res.status(400).json({ message: "income not found" });
  // }
  console.log(income);
  income.amount = amount;
  income.category = category;
  income.username = username;

  const updatedIncome = await income.save();

  res.json(` Income with ID '${updatedIncome.id}' updated`);
};

module.exports = {
  getIncomes,
  createNewIncome,
  deleteIncome,
  updateIncome,
};
