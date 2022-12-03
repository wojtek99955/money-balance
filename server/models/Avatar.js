const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema({
  userId: String,
  fileName: String,
  path: String,
});

module.exports = mongoose.model("Avatar", avatarSchema);
