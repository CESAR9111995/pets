const formularioReg = document.querySelector('#form-registro');
let nombreReg = document.querySelector('#nombreReg');
let usuarioReg = document.querySelector('#usuarioReg');
let passReg = document.querySelector('#passReg');
let emailReg = document.querySelector('#emailReg');
let btnReg = document.querySelector('.btn-Crear');
const spinnerReg = document.querySelector('#spinner-reg');
const regExNombReg = /^([a-zA-ZáéíóúÁÉÍÓÚ\s]{3,})+$/i;   //nombre
const regExMailReg = /^([^@*/]+[@]{1}[a-z]+\.[a-z]+)$/i;   //email
const regExPassReg = /^([^@*/]{3,})$/i; ///Contraseña
const regExUserReg = /^([a-z0-9_])+$/i;   //usuario
btnReg.addEventListener("click", validarFormularioReg);



  function validarNombreReg(e){
    if(!regExNombReg.test(nombreReg.value)){
        nombreReg.classList.add('borde-invalido');
      
            //ImpUsuario.classList.remove('usuarioValido');
            nombreReg.classList.add('regerror');
            document.getElementsByName('nombre')[0].placeholder='Ingresa un nombre valido';
    
 e.preventDefault();
    } else{
        nombreReg.classList.remove('borde-invalido');
        nombreReg.classList.add('borde-valido');
        //ImpUsuario.classList.add('usuarioValido');
        nombreReg.classList.remove('regerror');
        document.getElementsByName('nombre')[0].placeholder='Nombre';
    }
}

function validarUsuarioReg(e){
    if(!regExUserReg.test(usuarioReg.value)){
        usuarioReg.classList.add('borde-invalido');
      
            //ImpUsuario.classList.remove('usuarioValido');
            usuarioReg.classList.add('regerror');
            document.getElementsByName('user')[0].placeholder='Ingresa un usuario valido';
    
 e.preventDefault();
    } else{
        usuarioReg.classList.remove('borde-invalido');
        usuarioReg.classList.add('borde-valido');
        //ImpUsuario.classList.add('usuarioValido');
        usuarioReg.classList.remove('regerror');
        document.getElementsByName('user')[0].placeholder='Usuario';
    }
}


function validarEmailReg(e){
    if(!regExMailReg.test(emailReg.value)){
        emailReg.classList.add('borde-invalido');
            emailReg.classList.add('regerror');
            document.getElementsByName('email')[0].placeholder='Ingresa un correo valido';
    
 e.preventDefault();
    } else{
        emailReg.classList.remove('borde-invalido');
        emailReg.classList.add('borde-valido');
        
        emailReg.classList.remove('regerror');
        document.getElementsByName('email')[0].placeholder='Correo electrónico';
    }
}

function validarPassReg(e){
    if(!regExPassReg.test(passReg.value)){
        passReg.classList.add('borde-invalido');
            passReg.classList.add('regerror');
            document.getElementsByName('pass')[0].placeholder='Ingresa una contraseña valida';
    
 e.preventDefault();
    } else{
        passReg.classList.remove('borde-invalido');
        passReg.classList.add('borde-valido');
        passReg.classList.remove('regerror');
        document.getElementsByName('pass')[0].placeholder='Contraseña';
    }
}


function spinnerRegistro(){
    if(regExNombReg.test(nombreReg.value) && regExUserReg.test(usuarioReg.value) && regExMailReg.test(emailReg.value) && regExPassReg.test(passReg.value)){
        
            spinnerReg.classList.add('Spinner-activo');
            setTimeout( () => {
                
            spinnerReg.classList.remove('Spinner-activo');
            nombreReg.classList.remove('borde-valido');
            usuarioReg.classList.remove('borde-valido');
            emailReg.classList.remove('borde-valido');
            passReg.classList.remove('borde-valido');


              formularioReg.reset();
             
             
        }, 3000);
        
    }
}




function validarFormularioReg(e){
         e.preventDefault();
         validarNombreReg(e);
         validarUsuarioReg(e);
         validarPassReg(e);
         validarEmailReg(e);
         spinnerRegistro(e)
        
}

