/* lo correcto es trabajar con event listener´s */
/* callback = una funcion que se ejecuta cuando el usuario interactua con el evento
se define con funcion lambda o flecha */

/*
    sintaxis
    [variable].addEventListener('click', () => {
               [escucha]        [evento], [callback]
        console.log('click en boton');  [accion]
    });

*/

const primeraCaja = document.querySelector('.caja');
const boton1 = document.getElementById('boton1');
// console.log(boton1);
//                               [event o e representa la accion del usuario dentro del navegador]
boton1.addEventListener('click', (e) => {
  //toggle = alternar
  console.log(e);
  primeraCaja.classList.toggle('activa');
});

/*
    Agregando el evento a multiples elementos
    Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
    NOTA: esta no es la forma optima. en la proxima clase se aclarara

*/

const cajas = document.querySelectorAll('.caja');
cajas.forEach((caja) => {
  caja.addEventListener('click', (e) => {
    console.log(`haz hecho click en la caja ${e.target.innerHTML}`);
    //                                         accede al texto del elemento
  });
});
