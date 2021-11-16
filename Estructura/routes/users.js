const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { body, validationResult } = require('express-validator')



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars')
    },

    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null, fileName)
    }
})
const contraseña = {
    password: (req, res) => {
    let pass = req.body.contraseña
    }
    }
const validaciones  = [
    body('nombre').notEmpty().withMessage('Tienes que escribir tu nombre y apellido'),
    body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('repetir').notEmpty().withMessage('Tienes que repetir la contraseña').bail().equals(contraseña.password).withMessage('Las contraseñas deben ser iguales'),
    
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png'];
        
         
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las exteniones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
         }
        }
return true;
    })

 ]


const validacionesLogin = [
    body("email").notEmpty().withMessage("Tienes que escribir tu email").bail()
    .isEmail().withMessage("Tiene que ser un email valido"),
    body("contraseña").notEmpty().withMessage("Tienes que escribir tu contraseña")
]
const uploadFile = multer({ storage })

const usersController = require("../controller/usersController");

router.get("/login", usersController.login);
router.post("/login", validacionesLogin,usersController.procesarLogin);

router.get("/registro", usersController.register);
router.post("/registro",  uploadFile.single("avatar"), validaciones, usersController.procesarRegister)

module.exports = router;