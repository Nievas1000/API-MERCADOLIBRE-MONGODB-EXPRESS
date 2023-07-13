const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/registry").post(userController.createUser);
router.route("/login").get(userController.getUser);

module.exports = router;
