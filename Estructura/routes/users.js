const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { body } = require('express-validator')



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars')
    },

    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, fileName)
    }
})

const validaciones = [
    body('nombre').notEmpty().withMessage('Tienes que escribir tu nombre y apellido'),
    body('nombre-usuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('repetir').notEmpty().withMessage('Tienes que repetir la contraseña'),
    body('imagen-perfil').notEmpty().withMessage('Debes seleccionar una imagen')

]

const uploadFile = multer({ storage })

const usersController = require("../controller/usersController");

router.get("/login", usersController.login);

router.get("/registro", usersController.register);
router.post("/registro", uploadFile.single("imagen-perfil"), validaciones, usersController.procesarRegister)

module.exports = router;