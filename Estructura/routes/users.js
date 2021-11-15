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
    body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('email').isEmail().withMessage('Debes ingresar un email válido'),
    body('contraseña').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('repetir').notEmpty().withMessage('Tienes que repetir la contraseña'),
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

const uploadFile = multer({ storage })

const usersController = require("../controller/usersController");

router.get("/login", usersController.login);

router.get("/registro", usersController.register);
router.post("/registro", uploadFile.single("avatar"), validaciones, usersController.procesarRegister)

module.exports = router;