window.addEventListener("load", function(){
  let form = document.querySelector(".registro");

  form.addEventListener("submit", function(event){

    function validarEmail(valor) {
      let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      return expReg.test(valor);
    };

    function validarExtension(valor){
      var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
      if(!allowedExtensions.exec(valor)){
          return true;
      }else{
          return false;
      }
    };

    let nombre = document.querySelector(".nombre-apellido");
    let email = document.querySelector(".email");
    let user = document.querySelector(".user");
    let contraseña = document.querySelector(".contraseña");
    let repContraseña = document.querySelector(".rep-contraseña");
    let avatar = document.querySelector(".avatar");

    let errores = [];

    if(nombre.value == ""){
      errores.push("El campo nombre es obligatorio")
    }else if(nombre.value.length <= 1){
      errores.push("El campo nombre debe tener al menos dos caracteres")
    }

    if(email.value == ""){
      errores.push("El campo email es obligatorio")
    }else if(!validarEmail(email.value)){
      errores.push("El campo email es invalido")
    }

    if(user.value == ""){
      errores.push("El campo usuario es obligatorio")
    }

    if(contraseña.value == ""){
      errores.push("El campo contraseña es obligatorio")
    }else if(contraseña.value < 8){
      errores.push("El campo contraseña debe tener al menos 8 caracteres")
    }

    if(repContraseña.value == ""){
      errores.push("El campo repetir contraseña es obligatorio")
    }else if(repContraseña.value != contraseña.value){
      errores.push("Las contraseñas deben coincidir")
    }

    if(avatar.value == ""){
      errores.push("El campo avatar es obligatorio")
    }else if(validarExtension(avatar.value)){
      errores.push("El campo avatar tiene un formato invalido")
    }


    if(errores.length > 0){
      event.preventDefault();

      let ulErrores = document.querySelector("div.errores ul");
      
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>"+ "<i class='fas fa-exclamation-triangle'></i>" + errores[i] + "</li>"
      }

    }

  })
})