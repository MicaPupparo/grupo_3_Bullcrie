const User = require("../models/User")

function usuarioLogueadoMiddleware(req, res, next) {
    res.locals.estaLogueado = false;

    /*let emailEnCookie = req.cookies.usuarioEmail;
    console.log(emailEnCookie)*/

    if(req.session && req.session.usuarioLogueado) {
        res.locals.estaLogueado = true;
        res.locals.usuarioLogin = req.session.usuarioLogueado;
    }
    next()
};

module.exports = usuarioLogueadoMiddleware;

/*let usuarioEnCookie = User.encontrarPorCampo("email", emailEnCookie);

console.log(usuarioEnCookie)

if(usuarioEnCookie) {
    req.session.usuarioLogueado = usuarioEnCookie;
}*/