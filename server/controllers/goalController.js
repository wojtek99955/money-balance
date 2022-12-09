const Goal = require("../models/Goal");
const asyncHandler = require("express-async-handler");
const jwt_decode = require("jwt-decode");

const createNewGoal = async (req, res) => {
  const date = new Date()
    .toLocaleDateString("pt-br")
    .split("/")
    .reverse()
    .join("-");
  const { description, amount, deposit, category } = req.body;

  let JWT = req.cookies.jwt;
  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const goal = await Goal.create({
    description,
    userId,
    amount,
    date,
    deposit,
    category,
  });

  if (goal) {
    return res.status(201).json({ message: "New goal created" });
  } else {
    return res.status(400).json({ message: "Invalid goal data received" });
  }
};

const getGoals = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const goals = await Goal.find({
    userId,
  }).select("-userId");

  res.json(goals);
});

module.exports = { createNewGoal, getGoals };
