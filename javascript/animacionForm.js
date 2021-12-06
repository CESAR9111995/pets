let btnCuenta = document.querySelector('#btn-crearcuenta');
let formReg = document.querySelector('#form-registro');
let btnirIniciar = document.querySelector('#btn-iniciarsesion');


btnCuenta.addEventListener("click", () => {
  
      if(formReg.classList.contains("form-regdesactivado")){
             formReg.classList.remove('form-regdesactivado');
             formReg.classList.add('form-reg');
      }else{
        formReg.classList.remove('form-regdesactivado');
        formReg.classList.add('form-reg');
      }

});

btnirIniciar.addEventListener("click", () => {
  
  if(formReg.classList.contains("form-reg")){
    formReg.classList.add('form-regdesactivado');
    formReg.classList.remove('form-reg');
}

});
