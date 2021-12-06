const caraPerroReg = document.querySelector('.cara-sesion-Reg');
const lenguaReg = document.querySelector('.lengua-Reg');
const parpadosReg = document.querySelector('.parpados-Reg');
const ojosReg = document.querySelector('.ojos-Reg');
const pataIzqReg = document.querySelector('.pataizq-Reg');
const pataDerReg = document.querySelector('.patader-Reg');
let nomReg = document.querySelector('#nombreReg');

let userReg = document.querySelector('#usuarioReg');
let passwordReg = document.querySelector('#passReg');
let mailReg = document.querySelector('#emailReg');



//ANIMCACIÓN


setInterval(() => {
   lenguaReg.classList.add('lengua-escalaReg');
   setTimeout(() => { 
    lenguaReg.classList.remove('lengua-escalaReg');
   }, 400);
}, 1500);


setInterval(() => {
    parpadosReg.classList.add('parpados-activos-Reg');
    setTimeout(() => { 
     parpadosReg.classList.remove('parpados-activos-Reg');
    }, 200);
 }, 2000);

 
setInterval(() => {
   pataIzqReg.classList.add('pataizq-escalaReg');
   setTimeout(() => { 
      pataIzqReg.classList.remove('pataizq-escalaReg');
   }, 500);
}, 2000);


setInterval(() => {
   pataDerReg.classList.add('patader-escalaReg');
   setTimeout(() => { 
      pataDerReg.classList.remove('patader-escalaReg');
   }, 500);
}, 2000);


//Funciones
const movCaraReg = function(){
   caraPerroReg.classList.add('cara-reg-rotate');
}
const movPatasReg = function(){
   pataIzqReg.classList.add('movPatasReg');
   pataDerReg.classList.add('movPatasReg');
} 


const movParpadosReg = function(){
   parpadosReg.classList.add('movParpadosReg');
   
}
const movOjosReg = function(){
   ojosReg.classList.add('movOjosReg');
  
} 

const taparOjosReg = function(){
   pataIzqReg.classList.add('tapOjoIzqReg');
  pataDerReg.classList.add('tapOjoDerReg');
}

const salirnomReg = function(){
   pataIzqReg.classList.remove('movPatasReg');
   pataDerReg.classList.remove('movPatasReg');
   parpadosReg.classList.remove('movParpadosReg');
   ojosReg.classList.remove('movOjosReg');
   caraPerroReg.classList.remove('cara-reg-rotate');
}

const salirPassReg = function(){
   pataIzqReg.classList.remove('tapOjoIzqReg');
   pataDerReg.classList.remove('tapOjoDerReg');
}


const cargarEventosReg = function(){
   nomReg.addEventListener('input', movCaraReg);
   nomReg.addEventListener('input', movPatasReg);
   nomReg.addEventListener('input', movParpadosReg);
   nomReg.addEventListener('input', movOjosReg);
   nomReg.addEventListener('blur', salirnomReg);

   userReg.addEventListener('input', movCaraReg);
   userReg.addEventListener('input', movPatasReg);
   userReg.addEventListener('input', movParpadosReg);
   userReg.addEventListener('input', movOjosReg);
   userReg.addEventListener('blur', salirnomReg);

   mailReg.addEventListener('input', movCaraReg);
   mailReg.addEventListener('input', movPatasReg);
   mailReg.addEventListener('input', movParpadosReg);
   mailReg.addEventListener('input', movOjosReg);
   mailReg.addEventListener('blur', salirnomReg);

   passwordReg.addEventListener('input', taparOjosReg);
   passwordReg.addEventListener('blur', salirPassReg);
}
cargarEventosReg();