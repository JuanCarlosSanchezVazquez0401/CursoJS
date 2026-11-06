/*
    Modificando estilos mediante clases CSS
*/

const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList); //classList es una propiedad que nos permite ver una lista de clases que tengamos dentro del elemento

const agregarClase = () => {
  // classList.add() - agrega la clase que nosotros le indiquemos, importante no ponerle .
  primeraCaja.classList.add('activa');
};
const eliminarClase = () => {
  // classList.remove() - busca una clase especifica y la remueve
  primeraCaja.classList.remove('activa');
};

const toggleClase = () => {
  // cñassList.toggle() - Nos permite alternar clases de un elemento
  primeraCaja.classList.toggle('activa');
};

const comprobarClase = () => {
  // classList.contains() - Nos permite comprobar si el elemento tiene una clase o no
  if (primeraCaja.classList.contains('activa')) {
    console.log('la clase tiene caja activa');
  } else {
    console.log('la clase no tiene caja activa');
  }

  // mostrar las clases, entra en el primer if
  console.log('y contiene las siguientes clases:');
  primeraCaja.classList.forEach((clase) => {
    console.log(clase);
  });
};
