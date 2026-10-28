/* .toString() convertir numero a cadena */

const numero = 10;
console.log(numero, typeof numero);
const texto = numero.toString();
console.log(texto, typeof texto);

/* .toFixed() 
Permite obtener un numero con la cantidad de decimales especificados*/

const numero1 = 3.1415;
console.log(numero1.toFixed(2));

/* .parseInt() 
intenta transformar un valor a un numero entero*/
// const numero2 = prompt('escribe un numero');
// const numero3 = prompt('escribe un numero');

// console.log(parseInt(numero2) + parseInt(numero3));

/* .parseFloat() 
Intenta transformar un valor a un numero con decimales*/
// const numero4 = parseFloat(prompt('escribe un numero'));
// const numero5 = parseFloat(prompt('escribe un numero'));

// console.log(numero4 + numero5);

/* Math.random()
genera un numero al azar entre 0 y 1 */
const numeroR = Math.random();
console.log(numeroR);

/* Math.floor()
Redondea hacia abajo un numero
 */
console.log(Math.floor(10.6));

/*En ambos no importa si el decima esta hacia arriba o abajo redondea segun la funcion */

/* Math.floor()
redondea hacia arriba */
console.log(Math.ceil(10.6));

/* Math.round() 
Redondea hacia el entero mas cercano
En este caso si redonde hacia arriba o abajo dependiendo del decimal si esta mas cercano al siguiente
valor o al anterior*/

console.log(Math.round(10.6));
// console.log(Math.round(10.5)); /* a partir de .5 redondea hacia arriba */
console.log(Math.round(10.4));

/* Ejemplo de numeros  */

const numeroZC = Math.random();
console.log(Math.floor(numeroZC * 101));
