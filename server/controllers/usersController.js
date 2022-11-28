const User = require("../models/User");
const jwt_decode = require("jwt-decode");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Income = require("../models/Income");
const Expense = require("../models/Expense");

const getUser = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;

  const decoded = jwt_decode(JWT);
  const username = decoded.username;
  const user = await User.find({ username }).select("-password").lean();

  if (!user?.length) {
    return res.status(400).json({ message: "No user found" });
  }

  res.json(user);
});

const createNewUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "duplicate username" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userObject = { username, password: hashedPassword };

  // create / store new user

  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: "Invalid user date received" });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const { id, username, password } = req.body;
  if (!id || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const duplicate = await User.findOne({ username }).lean().exec();

  //allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  user.username = username;

  if (password) {
    //hash password

    user.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await user.save();
  res.json({ message: `${updatedUser.username} updated` });
});

const deleteUser = asyncHandler(async (req, res) => {
  const { username } = req.body;
  console.log(username);
  if (!username) {
    return res.status(400).json({ message: "Username required" });
  }

  const deleteUserResult = await User.deleteOne({ username });

  const deleteIncomeResult = await Income.deleteMany({ username });

  const deleteExpenseResult = await Expense.deleteMany({ username });

  const reply = `Username ${deleteUserResult.username} deleted`;
  res.json(reply);
});

module.exports = {
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
