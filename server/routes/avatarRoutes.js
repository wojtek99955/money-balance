const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const uploadAvatar = require("../middleware/uploadAvatar");
const Avatars = require("../models/Avatar");
const avatarController = require("../controllers/avatarController");

router
  .route("/")
  .post(uploadAvatar.single("avatar"), avatarController.uploadAvatar)
  .get(avatarController.getAvatar)
  .delete(avatarController.deleteAvatar);

module.exports = router;
