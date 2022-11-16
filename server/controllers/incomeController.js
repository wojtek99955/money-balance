const Income = require("../models/Income");
const asyncHandler = require("express-async-handler");
const jwt_decode = require("jwt-decode");

const categories = ["salary", "prize"];

const getIncomes = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;

  const page = req.query.p;
  const incomesPerPage = 5;
  const date = req.query.date;
  let category = req.query.category;

  category === "all"
    ? (category = [...categories])
    : (category = req.query.category.split(","));

  const incomesCount = await Income.find({ username }).count();

  const incomes = await Income.find({ username })
    .where("category")
    .in([...category])
    .skip(page * incomesPerPage)
    .limit(incomesPerPage)
    .sort({ createdAt: date })
    .select("-username")
    .lean();

  res.json({
    incomes,
    totalPages: Math.ceil(incomesCount / incomesPerPage),
  });
});

const createNewIncome = async (req, res) => {
  const { username, category, amount, date } = req.body;

  const income = await Income.create({ category, username, amount, date });

  if (income) {
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

  console.log(income);
  income.amount = amount;
  income.category = category;
  income.username = username;

  const updatedIncome = await income.save();

  res.json(` Income with ID '${updatedIncome.id}' updated`);
};

const getLatestIncomes = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;

  const incomes = await Income.find({ username: username })
    .select("-username")
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  res.json({ incomes });
});

const getTotalIncome = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;
  console.log(username);

  const totalIncome = await Income.aggregate([
    { $match: { username: username } },
    {
      $group: { _id: "$name", totalIncome: { $sum: "$amount" } },
    },
  ]);

  res.json({ totalIncome: totalIncome });
});

module.exports = {
  getIncomes,
  createNewIncome,
  deleteIncome,
  updateIncome,
  getLatestIncomes,
  getTotalIncome,
};
