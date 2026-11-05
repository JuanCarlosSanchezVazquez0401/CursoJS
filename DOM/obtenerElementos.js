/*
    getElementById
    Nos permite obtener un elemento en base a su atributo id
*/

const contenedor1 = document.getElementById('contenedor1');

console.log(contenedor1);

/*
    children
    Nos permite obtener los elementos hijo
*/

console.log(contenedor1.children);

/*
    parentElement
    Nos permite obtener el elemento padre de un objeto
*/

console.log(contenedor1.parentElement);

console.log('-----Padres,hijos y DOM--------------');
console.log('--------Nueva-seccion------------');

/*
    getElementsByTagName
    Nos permite obtener una coleccion de elementos en base a la etiqueta
    Nota: Devuelve una coleccion HTML. Una coleccion no es un arreglo
*/

const divs = document.getElementsByTagName('div');
console.log(divs);
console.log(`tenemos ${divs.length} divs en la pagina`);

/*
    getElementByClassName
    Nos permite obtener una coleccion de elementos en base a su clase de CSS
    Nota: Devuelve una coleccion HTML
*/

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

/*
    querySelector - acceder a un solo elemento
    Nos devuelve el primer elemento que coincida con un selector CSS
    Nota: Devuelve nodelist
*/

const caja = document.querySelector('#contenedor1 .caja'); // solo devuelve el primer elemento que coincida
console.log(caja);

/* querySelectorAll - acceder a mas de un elemento
    Nos permite obtener una coleccion de elementos en base a un selector estilo CSS
        Nota: Devuelve un nodelist
*/

const cajas = document.querySelectorAll('#contenedor1 .caja'); // solo devuelve el primer elemento que coincida
console.log(cajas);

/*LAS LISTAS DE NDOOS SE PUEDEN ITERAR CONN FOR EACH */
cajas.forEach((caja) => {
  console.log(`caja`);
});

/*
    closest
    Nos permite buscar de adentro hacia afuera en busca de un elemento
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));

/* podemos encadenar todo los metodo para obtener elementos */

const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));
console.log(contenedor2.querySelectorAll('.caja'));
