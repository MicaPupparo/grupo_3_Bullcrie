const express = require("express");

const router = express.Router();
const multer = require("multer");
const path = require("path")

const productosController = require("../controller/productosController");

// GET ALL PRODUCTS // 
router.get('/', productosController.tienda); //crear ejs de todos los productos

// GET ONE PRODUCT //
router.get("/detalle/:id", productosController.productDetail);

// GET CART //
router.get("/carrito", productosController.productCart);
router.post("/carrito", productosController.addToCart);

// CREATE ONE PRODUCT //
router.get("/create", productosController.productCreate);

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "../public/images"))
    },
    filename: function(req, file, cb){
        let newName = Date.now() + path.extname(file.originalname)
        cb(null, newName)
    }
})

let upload = multer({ storage })

router.post("/create", upload.any() ,productosController.store)

// EDIT ONE PRODUCT //

router.get("/editar/:id", productosController.productEdit);
router.put("/editar/:id", productosController.update)

// DELETE ONE PRODUCT//
router.delete('/delete/:id', productosController.destroy);


module.exports = router;