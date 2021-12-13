// const User = require("../models/User")

// function usuarioLogueadoMiddleware(req, res, next) {
//     res.locals.estaLogueado = false;

//     let emailEnCookie = req.cookies.usuarioEmail;
//     let usuarioEnCookie = User.encontrarPorCampo("email", emailEnCookie);

//     if(usuarioEnCookie) {
//         req.session.usuarioLogueado = usuarioEnCookie;
//     }
//     if(req.session && req.session.usuarioLogueado) {
//         res.locals.estaLogueado = true;
//         res.locals.usuarioLogin = req.session.usuarioLogueado;
//     }
//     next()
// };

// module.exports = usuarioLogueadoMiddleware;

