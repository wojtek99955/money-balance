const GoalPayment = require("../models/GoalPayment");
const asyncHandler = require("express-async-handler");
const Goal = require("../models/Goal");

const createNewPayment = async (req, res) => {
  const date = new Date()
    .toLocaleDateString("pt-br")
    .split("/")
    .reverse()
    .join("-");
  const { id, deposit } = req.body;

  const goalPayment = await GoalPayment.create({
    goalId: id,
    deposit,
    date,
  });

  goalPayment.save();

  const goal = await Goal.findByIdAndUpdate(id, { $inc: { deposit } });

  goal.save();

  if (goalPayment) {
    return res.status(201).json({ message: "New goalPayment created" });
  } else {
    return res
      .status(400)
      .json({ message: "Invalid goalPayment data received" });
  }
};

const getPayments = asyncHandler(async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const payments = await GoalPayment.find({ goalId: id });
  console.log(payments);

  res.json(payments);
});

module.exports = {
  createNewPayment,
  getPayments,
};
