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
  const { username, category, amount } = req.body;

  const income = await Income.create({ category, username, amount });

  if (income) {
    // Created
    return res.status(201).json({ message: "New income created" });
  } else {
    return res.status(400).json({ message: "Invalid income data received" });
  }
};

module.exports = {
  getIncomes,
  createNewIncome,
};
