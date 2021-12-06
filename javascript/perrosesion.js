const caraPerro = document.querySelector('.cara-sesion');
const lengua = document.querySelector('.lengua');
const cejas = document.querySelector('.cejas');
const parpados = document.querySelector('.parpados');
const ojos = document.querySelector('.ojos');
const pataIzq = document.querySelector('.pataizq');
const pataDer = document.querySelector('.patader');
let Impusuario = document.querySelector('#usuario');
let Imppass = document.querySelector('#pass');


//Funciones
const moverCara = function(){
   caraPerro.classList.add('cara-sesion-rotate');
}
const moverPatas = function(){
   pataIzq.classList.add('moverPatas');
   pataDer.classList.add('moverPatas');
} 

const moverCejas = function(){
   cejas.classList.add('moverCejas');
   
}
const moverParpados = function(){
   parpados.classList.add('moverParpados');
   
}
const moverOjos = function(){
   ojos.classList.add('moverOjos');
  
} 

const taparOjos = function(){
   pataIzq.classList.add('taparOjoIzq');
  pataDer.classList.add('taparOjoDer');
}

const salirInputUsuario = function(){
   pataIzq.classList.remove('moverPatas');
   pataDer.classList.remove('moverPatas');
   cejas.classList.remove('moverCejas');
   parpados.classList.remove('moverParpados');
   ojos.classList.remove('moverOjos');
   caraPerro.classList.remove('cara-sesion-rotate');
}

const salirInputPass = function(){
   pataIzq.classList.remove('taparOjoIzq');
   pataDer.classList.remove('taparOjoDer');
}


const cargarEventos = function(){
   Impusuario.addEventListener('input', moverCara);
   Impusuario.addEventListener('input', moverPatas);
   Impusuario.addEventListener('input', moverCejas);
   Impusuario.addEventListener('input', moverParpados);
   Impusuario.addEventListener('input', moverOjos);
   Impusuario.addEventListener('blur', salirInputUsuario);

   Imppass.addEventListener('input', taparOjos);
   Imppass.addEventListener('blur', salirInputPass);
}
cargarEventos();


//ANIMCACIÓN
/*
setInterval(() => {
    caraPerro.classList.add('cara-sesion-rotate');
   setTimeout(() => { 
    caraPerro.classList.remove('cara-sesion-rotate');
   }, 2000);
}, 5000);
*/

setInterval(() => {
   lengua.classList.add('lengua-escala');
   setTimeout(() => { 
    lengua.classList.remove('lengua-escala');
   }, 200);
}, 1000);


setInterval(() => {
    parpados.classList.add('parpados-activos');
    setTimeout(() => { 
     parpados.classList.remove('parpados-activos');
    }, 200);
 }, 2000);

 
setInterval(() => {
   pataIzq.classList.add('pataizq-escala');
   setTimeout(() => { 
      pataIzq.classList.remove('pataizq-escala');
   }, 500);
}, 1000);


setInterval(() => {
   pataDer.classList.add('patader-escala');
   setTimeout(() => { 
      pataDer.classList.remove('patader-escala');
   }, 500);
}, 1000);