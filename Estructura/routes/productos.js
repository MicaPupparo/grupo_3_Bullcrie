const express = require("express");

const router = express.Router();

const productosController = require("../controller/productosController");

router.get("/carrito", productosController.productCart);

router.get("/detalle", productosController.productDetail);

router.get("/create", productosController.productCreate);

module.exports = router;