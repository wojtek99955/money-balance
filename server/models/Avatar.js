const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema({
  username: String,
  fileName: String,
  path: String,
});

module.exports = mongoose.model("Avatar", avatarSchema);
