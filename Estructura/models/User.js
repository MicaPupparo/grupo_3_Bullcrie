// const fs = require("fs")

// const User = {

//     nombreArchivo: "./data/users.json",

//     traerData: function(){
//         return JSON.parse(fs.readFileSync(this.nombreArchivo, "utf-8"))
//     },

//     encontrarTodos: function(){
//         return this.traerData()
//     },

//     encontrarPorCampo: function(campo, texto) {
//         let todosLosUsuarios = this.encontrarTodos();
//         let usuarioEncontrado = todosLosUsuarios.find(unUsuario => unUsuario[campo] === texto);
//         return usuarioEncontrado;
//     }

// };

// module.exports = User;