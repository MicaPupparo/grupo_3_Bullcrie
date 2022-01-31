const path = require("path");
const fs = require("fs")
// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator')
const bcrypt = require("bcryptjs");
const db = require('../database/models')



const controller = {
  login: (req, res) => {
    res.render("login.ejs")
  },

  procesarLogin: (req, res) => {
    const resultValidation = validationResult(req)
    let usuarioALoguearse;

    if(!resultValidation.isEmpty()){
      res.render("login", {
        errors: resultValidation.mapped(),
        old: req.body
      }); 
    }else{
      db.Usuarios.findOne({
        where: {
          email: req.body.email
        }
      }).then(resultado => {
          let rta = resultado.dataValues
            if(rta.email == req.body.email){
            if(bcrypt.compareSync(req.body.contraseña, rta.password)){
              usuarioALoguearse = rta
              delete usuarioALoguearse.password
              req.session.usuarioLogueado = usuarioALoguearse;
              if(req.body.recordame != undefined) {
                res.cookie("usuarioEmail", req.body.email, {maxAge: 1000 * 23})
              }
              res.redirect("/");
            }
          }if(usuarioALoguearse == undefined){
                return res.render("login", { errors: 
                  {msg: "Credenciales invalidas"}
                });
              };
        
        })
      
      /*for (let i = 0; i < users.length; i++){
        if(users[i].email == req.body.email){
          if(bcrypt.compareSync(req.body.contraseña, users[i].contraseña)){
            usuarioALoguearse = users[i];
            break;
          }
        }
      };*/
    }

   
  }, // cierre de funcion
  
  register: (req, res) => {
    res.render("register.ejs")
  },

  procesarRegister: async (req, res) => {
    const resultValidation = validationResult(req)
    const psw = bcrypt.hashSync(req.body.contraseña, 1)
    const image = req.file.filename
   
    if(resultValidation.errors.length > 0){
      return res.render('register', {
        errors: resultValidation.mapped(),
        oldData: req.body
      });
    }
   

    try {
      await db.Usuarios.create({
        name: req.body.nombre,
        email: req.body.email,
        username: req.body.nombreUsuario,
        password: psw,
        avatar: image
        
      });
    } catch (error) {
      console.error(error);
    }
    
    
    
    /*let newUser = {
        id: users[users.length - 1].id + 1,
        ...req.body,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        repetir: bcrypt.hashSync(req.body.repetir, 10),
        image
     
    };
    users.push(newUser)
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));*/
    res.redirect('/usuarios/login');
  },

  detalle: (req, res) =>{
    if (req.params.id !== null) {
      db.Usuarios.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(usuario =>{
        res.render('userDetail', {usuario})
        console.log(usuario)
      } )
    } else {
      res.redirect("/usuarios/login")
    }
  },
  editar: (req, res) =>{
    db.Usuarios.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(usuarioAEditar => {
      res.render('userEdit', { usuarioAEditar })
    })
  },
  procesarEdicion: (req, res) => {
    db.Usuarios.update({
      name: req.params.name,
      email: req.params.email,
      username: req.params.username,
      avatar: req.params.avatar, 
    },
    {
      where: {
        id: req.params.id
      }
    })
      // .then(data => {
      //   return console.log(data)
      // })
    res.redirect('/usuarios/detalle/'+req.params.id)
  }
}

module.exports = controller;