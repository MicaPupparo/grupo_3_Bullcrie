   const db = require("../database/models")

   function usuarioLogueadoMiddleware(req, res, next) {
       res.locals.estaLogueado = false;

       let emailEnCookie = req.cookies.usuarioEmail;

       if (emailEnCookie) {
          db.Usuarios.findOne({
             where: {
                email: emailEnCookie
             }
          }).then(resultado => {
             let respuestaFinal = resultado.dataValues
             req.session.usuarioLogueado = respuestaFinal.email;
              
          })
       }
      if(req.session && req.session.usuarioLogueado) {
               res.locals.estaLogueado = true;
               res.locals.usuarioLogin = req.session.usuarioLogueado;
             }
            next() 
      
   };

 module.exports = usuarioLogueadoMiddleware;

