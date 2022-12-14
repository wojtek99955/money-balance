const Income = require("../models/Income");
const asyncHandler = require("express-async-handler");
const jwt_decode = require("jwt-decode");

const categories = ["salary", "prize"];

const getIncomes = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const page = req.query.p;
  const incomesPerPage = req.query.limit;
  const timestamp = req.query.timestamp;
  const date = req.query.date;
  let category = req.query.category;

  category === "all"
    ? (category = [...categories])
    : (category = req.query.category.split(","));

  const incomesCount = await Income.find({
    userId,
    date: date ? date : { $exists: true },
  }).count();

  const incomes = await Income.find({
    userId,
    date: date ? date : { $exists: true },
  })
    .where("category")
    .in([...category])
    .skip(page * incomesPerPage)
    .limit(incomesPerPage)
    .sort({ createdAt: timestamp })
    .select("-username")
    .lean();

  res.json({
    incomes,
    totalPages: Math.ceil(incomesCount / incomesPerPage),
  });
});

const createNewIncome = async (req, res) => {
  const date = new Date()
    .toLocaleDateString("pt-br")
    .split("/")
    .reverse()
    .join("-");
  const { category, amount } = req.body;

  let JWT = req.cookies.jwt;
  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const income = await Income.create({
    category,
    userId,
    amount,
    date,
    dateAdded: Date.now(),
  });

  if (income) {
    return res.status(201).json({ message: "New income created" });
  } else {
    return res.status(400).json({ message: "Invalid income data received" });
  }
};

const deleteIncome = async (req, res) => {
  const { id } = req.body;

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
  const { id, amount, category } = req.body;

  const income = await Income.findById(id).exec();

  income.amount = amount;
  income.category = category;

  const updatedIncome = await income.save();

  res.json(` Income with ID '${updatedIncome.id}' updated`);
};

const getLatestIncomes = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const incomes = await Income.find({ userId })
    .select("-userId")
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  res.json({ incomes });
});

const getTotalIncome = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const totalIncome = await Income.aggregate([
    { $match: { userId } },
    {
      $group: { _id: "$name", totalIncome: { $sum: "$amount" } },
    },
  ]);

  res.json(totalIncome);
});

const getDailySum = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;
  const dateRange = req.query.dateRange;
  const range =
    dateRange === "month" ? 30 * 60 * 60 * 24 * 1000 : 7 * 60 * 60 * 24 * 1000;

  const totalIncome = await Income.aggregate([
    { $match: { userId, dateAdded: { $gte: Date.now() - range } } },
    {
      $group: {
        _id: "$date",
        totalAmount: { $sum: "$amount" },
      },
    },
  ]).sort({ _id: -1 });

  res.json({ totalDayIncome: totalIncome.reverse() });
});

module.exports = {
  getIncomes,
  createNewIncome,
  deleteIncome,
  updateIncome,
  getLatestIncomes,
  getTotalIncome,
  getDailySum,
};
