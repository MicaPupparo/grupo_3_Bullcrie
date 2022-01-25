const express = require("express");

const router = express.Router();

const contactoController = require("../controller/contactoController");

router.get("/contacto", contactoController.contacto);

module.exports = router;