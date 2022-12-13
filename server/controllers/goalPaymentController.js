const GoalPayment = require("../models/GoalPayment");
const asyncHandler = require("express-async-handler");
const jwt_decode = require("jwt-decode");

const createNewPayment = async (req, res) => {
  const date = new Date()
    .toLocaleDateString("pt-br")
    .split("/")
    .reverse()
    .join("-");
  const { id, deposit } = req.body;

  console.log(id);

  const goalPayment = await GoalPayment.create({
    goalId: id,
    deposit,
    date,
  });

  goalPayment.save();

  if (goalPayment) {
    return res.status(201).json({ message: "New goalPayment created" });
  } else {
    return res
      .status(400)
      .json({ message: "Invalid goalPayment data received" });
  }
};

module.exports = {
  createNewPayment,
};
