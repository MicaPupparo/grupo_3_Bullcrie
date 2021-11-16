const path = require("path");
const fs = require("fs")
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator')
const bcrypt = require("bcryptjs");

const controller = {
  login: (req, res) => {
    res.render("login.ejs")
  },

  procesarLogin: (req, res) => {
    const resultValidation = validationResult(req)

    if(!resultValidation.isEmpty()){
      res.render("login", {
        errors: resultValidation.mapped(),
        old: req.body
      });
    }else{
      
      for (let i = 0; i < users.length; i++){
        if(users[i].email == req.body.email){
          if(bcrypt.compareSync(req.body.contraseña, users[i].contraseña))
          if(req.body.contraseña == users[i].contraseña){
            let usuarioALoguearse = users[i];
            break;
          }
        }
      };

      if(usuarioALoguearse == undefined){
        return res.render("login", {errors: [
          {msg: "Credenciales invalidas"}
        ]});
      };

      req.session.usuarioLogueado = usuarioALoguearse;
      
      res.render("index");

    }
  },
  
  register: (req, res) => {
    res.render("register.ejs")
  },

  procesarRegister: (req, res) => {
    const resultValidation = validationResult(req)
   
    if(resultValidation.errors.length > 0){
      return res.render('register', {
        errors: resultValidation.mapped(),
        oldData: req.body
      });
    }
    
    let image = req.file.filename
    let newUser = {
        id: users[users.length - 1].id + 1,
        ...req.body,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        repetir: bcrypt.hashSync(req.body.repetir, 10),
        image
     
    };
    users.push(newUser)
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.redirect('/usuarios/login');
  },
}

module.exports = controller;