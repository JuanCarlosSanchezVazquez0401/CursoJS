const boton1 = document.getElementById('boton1');
//                      ["busca el elemento con el id = boton1"]
const boton2 = document.getElementById('boton2');
const primeraCaja = document.querySelector('.caja');

const toggleClase = () => {
  primeraCaja.classList.toggle('activa');
};

boton1.addEventListener('click', () => {
  primeraCaja.addEventListener('click', toggleClase);
  //  podemos sustituir la funcion flecha por una variable que la contenga
});

/*
    Para eliminar un evento se tiene que trabajar con una referencia que nos permita acceder
    al listener que contenga el evento que queremos eliminar 
    la forma mas sencilla es guardarla en una variable
*/

boton2.addEventListener('click', () => {
  primeraCaja.removeEventListener('click', toggleClase);
  /*removeEventListener recibe dos paramentros
  1 - el elemento que queremos eliminar
  2 - la funcion que queremos ejecutar  
  En este caso le estamos diciendo "quiero que tomes la primer caja, quiero que elimines el evento 
  de tipo click y que era el que ejecutaba x funcion"*/
});
