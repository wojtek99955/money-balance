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
  const { description, amount, deposit, category, targetDate } = req.body;

  let JWT = req.cookies.jwt;
  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const targetDateMilisec = new Date(targetDate).getTime();

  const goal = await Goal.create({
    description,
    userId,
    amount,
    date,
    deposit,
    category,
    targetDate: targetDateMilisec,
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
  const acheived = req.query.acheived;

  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const goals = await Goal.find({
    userId,
    acheived,
  }).select("-userId");

  const currentDate = new Date().getTime();

  const goalsArray = goals.map((goal) => {
    const calculateDaysLeft = (currentDate) => {
      let difference = currentDate - goal.targetDate;
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return Math.abs(TotalDays);
    };
    return {
      goal,
      daysLeft: calculateDaysLeft(currentDate),
    };
  });

  const dates = goals.map((goal) => new Date(goal.targetDate).getTime());

  res.json(goalsArray);
});

const deleteGoal = async (req, res) => {
  const { id } = req.body;

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
  const { id, description, amount, category } = req.body;

  const goal = await Goal.findById(id).exec();

  goal.amount = amount;
  goal.category = category;
  goal.description = description;

  const updatedGoal = await goal.save();

  res.json(` Goal with ID '${updatedGoal.id}' updated`);
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
  getTotalAmount,
};
