const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcryptjs");
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

const validaciones  = [
    body('nombre').notEmpty().withMessage('Tienes que escribir tu nombre y apellido').isLength({min:2}),
    body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña').bail().isLength({min:8}).withMessage('Tienes que escribir al menos 8 caracteres').bail().isNumeric().isUppercase().withMessage('Tienes que escribir una mayuscula, una minuscula, un caracter especial y un numero'),
    body('repetir').custom(async (confirmarContraseña, {req}) => {
        const contraseña = req.body.contraseña
        if(contraseña !== confirmarContraseña){
          throw new Error('Las contraseñas deben ser iguales')
        }
      }),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif', '.JPG', '.PNG', 'JPEG', '.GIF'];
        
         
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            console.log(path.extname(file.originalname));
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
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña')
]
const uploadFile = multer({ storage })

const usersController = require("../controller/usersController");

router.get("/login", usersController.login);
router.post("/login", validacionesLogin,usersController.procesarLogin);

router.get("/registro", usersController.register);
router.post("/registro",  uploadFile.single("avatar"), validaciones, usersController.procesarRegister)

module.exports = router;