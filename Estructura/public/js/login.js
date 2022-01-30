window.addEventListener("load", function(){
  let form = document.querySelector(".log");

  form.addEventListener("submit", function(event){

    //event.preventDefault();

    function validarEmail(valor) {
      let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      return expReg.test(valor);
    };

    let email = document.querySelector(".email");
    let contraseña = document.querySelector(".contraseña");
    
    let errores = [];

    if(email.value == ""){
      errores.push("El campo email es obligatorio")
    }else if(!validarEmail(email.value)){
      errores.push("El campo email es invalido")
    }

    if(contraseña.value == ""){
      errores.push("El campo contraseña es obligatorio")
    }else if(contraseña.value < 8){
      errores.push("El campo contraseña debe tener al menos 8 caracteres")
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