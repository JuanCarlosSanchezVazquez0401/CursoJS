/*
    Modificar estilos CSS mediante "inline styles"
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
ultimaCaja.style.background = '#000';
ultimaCaja.style.color = 'thistle';

const cajas = document.querySelectorAll('.caja');
// console.log(cajas);
let tamanio = 24; //importante usar let para actualizar

const incrementarFuente = () => {
  cajas.forEach((caja) => {
    // console.log(caja);
    // nuevamente JS no acepta "-" por que es operador RESTA, SUSTUTUIR POR CAMELL CASE
    caja.style.fontSize = `${tamanio + 1}px`;
    tamanio++;
  });
};

const disminuirFuente = () => {
  cajas.forEach((caja) => {
    // console.log(caja);
    // nuevamente JS no acepta "-" por que es operador RESTA, SUSTUTUIR POR CAMELL CASE
    caja.style.fontSize = `${tamanio - 1}px`;
    tamanio--;
  });
};
