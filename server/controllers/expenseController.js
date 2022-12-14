const Expense = require("../models/Expense");
const jwt_decode = require("jwt-decode");
const asyncHandler = require("express-async-handler");

const createExpense = async (req, res) => {
  const { category, amount } = req.body;
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;
  const date = new Date()
    .toLocaleDateString("pt-br")
    .split("/")
    .reverse()
    .join("-");

  const expense = await Expense.create({
    category,
    userId,
    amount,
    date,
    dateAdded: Date.now(),
  });

  if (expense) {
    return res.status(201).json({ message: "New expense created" });
  } else {
    return res.status(400).json({ message: "Invalid expense data received" });
  }
};

const categories = ["shopping", "transportation", "gift", "restaurants"];

const getExpenses = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const timestamp = req.query.timestamp;
  const page = req.query.p;
  const expensesPerPage = req.query.limit;
  const date = req.query.date;
  let category = req.query.category;

  category === "all"
    ? (category = [...categories])
    : (category = req.query.category.split(","));

  const expensesCount = await Expense.find({
    userId: decoded.userId,
    date: date ? date : { $exists: true },
  }).count();

  const expenses = await Expense.find({
    userId: decoded.userId,
    date: date ? date : { $exists: true },
  })
    .where("category")
    .in([...category])
    .skip(page * expensesPerPage)
    .limit(expensesPerPage)
    .sort({ createdAt: timestamp })
    .select("-username")
    .lean();

  res.json({
    expenses: expenses,
    totalPages: Math.ceil(expensesCount / expensesPerPage),
  });
});

const deleteExpense = async (req, res) => {
  const { id } = req.body;

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
  const { id, amount, category } = req.body;

  const expense = await Expense.findById(id).exec();

  expense.amount = amount;
  expense.category = category;

  const updatedExpense = await expense.save();

  res.json(` Expense with ID '${updatedExpense.id}' updated`);
};

const getLatestExpenses = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const expenses = await Expense.find({ userId })
    .limit(3)
    .select("-userId")
    .sort({ createdAt: -1 })
    .lean();
  res.json({ expenses });
});

const getTotalExpense = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const totalExpense = await Expense.aggregate([
    { $match: { userId } },
    {
      $group: { _id: "$name", totalExpense: { $sum: "$amount" } },
    },
  ]);

  res.json(totalExpense);
});

const getSumCategories = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const shoppingSum = await Expense.aggregate([
    { $match: { userId, category: "shopping" } },
    {
      $group: { _id: "$name", shoppingSum: { $sum: "$amount" } },
    },
  ]);

  const giftSum = await Expense.aggregate([
    { $match: { userId, category: "gift" } },
    {
      $group: { _id: "$name", giftSum: { $sum: "$amount" } },
    },
  ]);

  const restaurantsSum = await Expense.aggregate([
    { $match: { userId, category: "restaurants" } },
    {
      $group: { _id: "$name", restaurantsSum: { $sum: "$amount" } },
    },
  ]);

  const transportationSum = await Expense.aggregate([
    { $match: { userId, category: "transportation" } },
    {
      $group: { _id: "$name", transportationSum: { $sum: "$amount" } },
    },
  ]);

  const sumCategories = [
    {
      category: "shopping",
      amount: shoppingSum.length !== 0 ? shoppingSum[0].shoppingSum : 0,
    },
    {
      category: "restaurants",
      amount:
        restaurantsSum.length !== 0 ? restaurantsSum[0].restaurantsSum : 0,
    },
    {
      category: "gift",
      amount: giftSum.length !== 0 ? giftSum[0].giftSum : 0,
    },
    {
      category: "transportation",
      amount:
        transportationSum.length !== 0
          ? transportationSum[0].transportationSum
          : 0,
    },
  ].sort((a, b) => b.amount - a.amount);

  res.json(sumCategories);
});

const getDailySum = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const dateRange = req.query.dateRange;

  const range =
    dateRange === "month" ? 30 * 60 * 60 * 24 * 1000 : 7 * 60 * 60 * 24 * 1000;

  const totalExpense = await Expense.aggregate([
    { $match: { userId, dateAdded: { $gte: Date.now() - range } } },
    {
      $group: {
        _id: "$date",
        totalAmount: { $sum: "$amount" },
      },
    },
  ]).sort({ _id: -1 });

  res.json({ totalDayExpense: totalExpense.reverse() });
});

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
  getLatestExpenses,
  getTotalExpense,
  getSumCategories,
  getDailySum,
};
