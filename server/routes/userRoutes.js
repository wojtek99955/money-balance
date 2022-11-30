const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");

// router.use(verifyJWT)

router
  .route("/")
  .get(usersController.getUser)
  .post(usersController.createNewUser)
  .patch(usersController.updateUsername)
  .delete(usersController.deleteUser);

module.exports = router;
