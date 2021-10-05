const express = require("express");

const router = express.Router();

const usersController = require("../controller/usersController");

router.get("/login", usersController.login);

router.get("/registro", usersController.register);

module.exports = router;