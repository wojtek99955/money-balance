const asyncHandler = require("express-async-handler");
const jwt_decode = require("jwt-decode");
const Avatar = require("../models/Avatar");

const uploadAvatar = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;
  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;
  const file = req.body.myFile;

  const avatar = await Avatar.create({
    userId,
    file,
  });

  if (avatar) {
    return res.status(201).json({ message: "Avatar uploaded" });
  } else {
    return res.status(400).json({ message: "Invalid avatar data received" });
  }
});

const getAvatar = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;
  const decoded = jwt_decode(JWT);
  const userId = decoded.userId;

  const avatar = await Avatar.find({
    userId,
  });

  if (avatar.length === 0) {
    res.json(0);
  } else {
    res.json(avatar);
  }
});

const deleteAvatar = asyncHandler(async (req, res) => {
  let JWT = req.cookies.jwt;
  const decoded = jwt_decode(JWT);

  const userId = decoded.userId;

  const result = await Avatar.deleteOne({ userId });
  const reply = "Avatar deleted";

  res.json(reply);
});

module.exports = { uploadAvatar, getAvatar, deleteAvatar };
