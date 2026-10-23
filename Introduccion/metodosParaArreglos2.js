/*
.indexOf()
    Obtenemos el primer index de un elemento
    Si no hay elemento nos retorna -1
*/
const nombres = [
  'Carlos',
  'Rafael',
  'Estefania',
  'Rodrigo',
  'Rafael',
  'Gema',
  'Diana',
  'Sara',
];

console.log(nombres.indexOf('Rafael'));
console.log(nombres.indexOf('Carmen'));

/*
    .lastIndexOf()
    Obtener el ultimo index de un elemento.

*/

console.log(nombres.lastIndexOf('Rafael'));

/*
    .forEach()
    Nos permite ejecutar una funcion por cada elemento
*/
//retorna 3 paramentros, [nombre, indice, lista completa]
nombres.forEach((nombre, index) => {
  console.log(`Hola ${nombre} (${index})`); // la funcion se ejecuta 8 veces
});

/*
    .find()
    Nos permite recorrer un arreglo y devuelve el primer elemento que retornemos
*/

// retorna la primera letra de cada elemento de la lista
const resultado = nombres.find((nombre) => {
  console.log(nombre[0]);

  return;
});

const resultadoN = nombres.find((nombre) => {
  if (nombre[0] === 'E') {
    return nombre;
  }
  //   console.log(nombre); -> esto retorna lo que recorre antes de encontrar los solicitado en este caso "carlos""Rafael" por que estan antes que estefania
});
console.log(resultadoN);

// const resultado1 = nombres.find((nombre) => {
//   console.log(nombre.length);

//   return;
// });
