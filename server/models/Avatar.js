const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema({
  userId: String,
  file: String,
});

module.exports = mongoose.model("Avatar", avatarSchema);
