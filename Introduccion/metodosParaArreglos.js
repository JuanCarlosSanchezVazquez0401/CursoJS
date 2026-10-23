const colores = ['rojo', 'amarillo', 'verde'];
/* 
-length
    propiedad - permite conocer la cantidad de elementos de un arreglo */
// colores.pop() - funcion;
console.log(colores.length);
// console.log(colores);
// colores.push('azul');
// console.log(colores);
// colores.sort();
// console.log(colores);

/*
- toString()
 Nos permite transformar un arreglo a una cadena de texto.
 Por ejemplo para poder mostrarlo en el navegador */
// document.body.innerHTML = colores.toString();
//transforma lo que le digamos en texto, en este caso acompañado del DOM con "document.body.innerHTML"
//sustituye el body del HTML por nuestra lista en forma de texto

/*
- .join
Nos permite transformar un arreglo a una cadena de texto y separar cada elemento
*/
console.log(colores.join('-'));

/* .sort
    Nos permite ordernar un arreglo de cadena de texto, de forma alfabetica
*/

const letras = ['c', 'b', 'l', 'a', 'a', 'q'];
const numbers = [3, 5, 1, 1, 3, 5, 20, 5, 3, 8, 12];

console.log(letras.sort());
console.log(numbers.sort()); //ordena los numeros pero en caso de numeros de dos digitos toma el primero y no lo hace
//En este caso considera el 20 como 2 y el 12 como 1
console.log(letras.reverse());
console.log(numbers.reverse()); //lo mismo que sort

/*
.concat()
Nos permite juntar dos arreglos en uno solo.
*/

const arreglo1 = [1, 2, 3];
const arreglo2 = ['a', 'b', 'c'];
const arreglo3 = arreglo1.concat(arreglo2); //dentro del argumento va el arreglo que queremos juntar

console.log(arreglo3);

/*
.push()
Agregar un elemento al final del arreglo
*/

colores.push('morado');
console.log(colores);

/*
pop
Elimina el ultimo elemento
 */
console.log(colores.pop()); //manda a llamar lo que saca la funcion
colores.pop(); // unicamente elimina
console.log(colores); // manda a llamar la lista actualizada

/*
.shift()
Elimina el primer elemento de un arreglo y recorre los elementos

*/
const dia = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
];

console.log(dia);
const diaEliminado = dia.shift(); // Guarda el dia eliminado
console.log(diaEliminado);
console.log(dia);

/*
.unshift()
Agrega un elemento al inicio del arreglo y empuja los elementos
*/

dia.unshift('Carlos');
console.log(dia);

/*.splice()
Nos permite insertar elementos a un arreglo donde le especifiquemos.
- 1er paramentro - Posicion donde queremos comenzar a insertar los elementos
- 2do parametro - Si queremos eliminar elementos del arreglo desde la posicion indicada
- Resto de parametros - Los elementos a insertar
*/

const amigos = ['alejandro', 'cesar', 'manuel'];
amigos.splice(1, 2, 'Rafael', 'Roberto', 'Cristian');
/*1 indica que quiero sustituir a partir del elemento con el indice 1 es decir cesar
2 indica que a partir del elemento 1 o en este caso cesar quiero eliminar los 2 elementos continuos a este
"cesar y manuel"
despues de estos 2 parametros todo lo que le demos lo va a agregar a la lista, independientemente del numero
de elementos que hayamos eliminado o sustituido */

/*Si solo quiero agregar elementos en alguna posicion especifica sin eliminar o reemplazar algun otros solamente
le indico en el primer parametro el de posicion desde que posicion quiero hacerlo y el segundo lo dejo en 0 para
no eliminar nada */
console.log(amigos);

/*
.slice() 
Nos permite copiar una parte de un arreglo a otro
- 1er parametro - Posicion desde donde queremos copiar
- 2do parametro - Hasta antes de que elementos copiar (n-1)
*/

const frutas = ['Fresa', 'Mango', 'Durazon', 'Manzana', 'Uva', 'Cereza'];
const frutasFav = frutas.slice(1, 4); //el elemento 4 es Uva asi que copia hasta Manzana
console.log(frutasFav);
