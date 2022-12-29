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
  const acheived = goal.deposit + deposit >= goal.amount ? true : false;
  goal.acheived = acheived;
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

  const page = req.query.p;
  const expensesPerPage = 6;

  const payments = await GoalPayment.find({ goalId: id })
    .skip(page * expensesPerPage)
    .limit(expensesPerPage);
  console.log(payments);

  const paymentsCount = await GoalPayment.find({ goalId: id }).count();

  const totalPages = Math.ceil(paymentsCount / expensesPerPage);

  res.json({ payments, totalPages });
});

module.exports = {
  createNewPayment,
  getPayments,
};
