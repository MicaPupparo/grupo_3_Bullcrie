const express = require("express");
const router = express.Router();
const path = require("path");
const usersApiController = require("../controller/usersApiController");
const productsApiController = require("../controller/productsApiController");


router.get("/users", usersApiController.getAllUsers);
router.get("/users/:id", usersApiController.getUser);

router.get("/products", productsApiController.getAllProducts);
router.get("/products/:id",  productsApiController.getProducts)

module.exports = router;