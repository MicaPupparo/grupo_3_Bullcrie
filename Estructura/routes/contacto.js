const express = require("express");

const router = express.Router();

const contactoController = require("../controller/contactoController");

router.get("/", contactoController.contacto);

module.exports = router;