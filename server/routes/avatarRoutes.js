const express = require("express");
const router = express.Router();

const avatarController = require("../controllers/avatarController");

router
  .route("/")
  .post(avatarController.uploadAvatar)
  .get(avatarController.getAvatar)
  .delete(avatarController.deleteAvatar);

module.exports = router;
