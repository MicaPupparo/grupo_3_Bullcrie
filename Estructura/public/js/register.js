const path = require("path");

window.addEventListener("load", function(){
  let  form = document.querySelector(".registro");

  form.addEventListener("submit", function(event){
    event.preventDefault();

    let nombre = document.querySelector(".nombre-apellido");
    let email = document.querySelector(".email");
    let user = document.querySelector(".user");
    let contraseña = document.querySelector(".contraseña");
    let repContraseña = document.querySelector(".rep-contraseña");
    let avatar = document.querySelector(".avatar");

    let errores = [];

    let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

    if(nombre.value == ""){
      console.log("El campo nombre es obligatorio")
    }else if(nombre.value.length <= 1){
      alert("El campo nombre debe tener al menos dos caracteres")
    }
    if(email.value == ""){
      alert("El campo email es obligatorio")
    }
    if(user.value == ""){
      alert("El campo usuario es obligatorio")
    }
    if(contraseña.value == ""){
      alert("El campo contraseña es obligatorio")
    }else if(contraseña.value < 8){
      alert("El campo de contrseña debe tener al menos 8 caracteres")
    }
    if(repContraseña.value == ""){
      alert("El campo repetir contraseña es obligatorio")
    }else if(repContraseña.value != contraseña.value){
      alert("Las contraseñas deben coincidir")
    }
    if(avatar.value == ""){
      alert("El campo avatar es obligatorio")
    }else{
      let fileExtension = path.extname(avatar.value.originalname);
      if(!acceptedExtensions.includes(fileExtension)){
        alert("Las exteniones de archivo permitidas son '.jpg' '.png' '.jpeg' '.gif'")
      }
    }


  })
})