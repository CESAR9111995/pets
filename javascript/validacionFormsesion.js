const formulario = document.querySelector('#formulario-sesion');
let ImpUsuario = document.querySelector('#usuario');
let ImpPass = document.querySelector('#pass');
let btniniciar = document.querySelector('#btnIniciarsesion');
const Spinner = document.querySelector('#spinner');
const regExNomb = /^([a-zA-ZáéíóúÁÉÍÓÚ\s]{3,})+$/i;   //nombre
const regExMail = /^([^@*/]+[@]{1}[a-z]+\.[a-z]+)$/i;   //email
const regExPass = /^([^@*/]{3,})$/i; ///Contraseña

btniniciar.addEventListener("click", validarFormulario);



  function validarNombre(e){
    if(!regExMail.test(ImpUsuario.value)){
        ImpUsuario.classList.add('usuario-borde-invalido');
      
            //ImpUsuario.classList.remove('usuarioValido');
            ImpUsuario.classList.add('usuariosesionerror');
            document.getElementsByName('usuario')[0].placeholder='Ingresa un usuario valido';
    
 e.preventDefault();
    } else{
        ImpUsuario.classList.remove('usuario-borde-invalido');
        ImpUsuario.classList.add('usuario-borde-valido');
        //ImpUsuario.classList.add('usuarioValido');
        ImpUsuario.classList.remove('usuariosesionerror');
        document.getElementsByName('usuario')[0].placeholder='Correo electrónico';
    }
}

function validarPass(e){
    if(!regExPass.test(ImpPass.value)){
        ImpPass.classList.add('pass-borde-invalido');
      
           
            ImpPass.classList.add('usuariopasserror');
            document.getElementsByName('pass')[0].placeholder='Ingresa una contraseña valida';
    
 e.preventDefault();
    } else{
        ImpPass.classList.remove('pass-borde-invalido');
        ImpPass.classList.add('pass-borde-valido');
        ImpPass.classList.remove('usuariopasserror');
        document.getElementsByName('pass')[0].placeholder='Contraseña';
    }
}



function validarYmostrarspinner(){
    if(regExMail.test(ImpUsuario.value) && regExPass.test(ImpPass.value)){
        
            spinner.classList.add('spinner-activo');
            setTimeout( () => {
                
            spinner.classList.remove('spinner-activo');
            ImpPass.classList.remove('pass-borde-valido');
            ImpUsuario.classList.remove('usuario-borde-valido');


              formulario.reset();

             
             
        }, 3000);
         
    }
}




function validarFormulario(e){
         e.preventDefault();
         validarNombre(e);
         validarPass(e);
         validarYmostrarspinner(e)
}

