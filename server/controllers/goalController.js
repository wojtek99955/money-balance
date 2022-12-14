const Goal = require("../models/Goal");
const asyncHandler = require("express-async-handler");
const jwt_decode = require("jwt-decode");
const GoalPayment = require("../models/GoalPayment");

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

  const newGoalId = goal._id;

  const goalPayment = await GoalPayment.create({
    goalId: newGoalId,
    deposit,
    date,
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

const deleteGoal = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: "Goal ID required" });
  }

  const goal = await Goal.findById(id).exec();

  if (!goal) {
    return res.status(400).json({ message: "Goal not found" });
  }

  const result = await goal.deleteOne();

  const reply = `Goal ${result.title} with ID ${result._id} deleted`;

  res.json(reply);
};

const updateGoal = async (req, res) => {
  const { id, description, amount, deposit, category } = req.body;

  const goal = await Goal.findById(id).exec();

  goal.amount = amount;
  goal.category = category;
  goal.description = description;
  goal.deposit = deposit;

  const updatedGoal = await goal.save();

  res.json(` Goal with ID '${updatedGoal.id}' updated`);
};

const updateDeposit = async (req, res) => {
  const { id, deposit, amount } = req.body;

  const goal = await Goal.findById(id).exec();

  const isAcheived = deposit >= amount;

  if (isAcheived) {
    goal.acheived = true;
  }
  goal.amount = amount;

  const updatedGoal = await goal.save();

  res.json(` Goal amount with ID '${updatedGoal.id}' updated`);
};

const getTotalAmount = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const totalGoals = await Goal.aggregate([
    { $match: { userId } },
    {
      $group: { _id: "totalExpense", totalExpense: { $sum: "$deposit" } },
    },
  ]);

  res.json(totalGoals[0].totalExpense);
});

module.exports = {
  createNewGoal,
  getGoals,
  deleteGoal,
  updateGoal,
  updateDeposit,
  getTotalAmount,
};
