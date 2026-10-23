const nombres = [
  'Carlos',
  'Rafael',
  'Estefania',
  'Rodrigo',
  'Rafael',
  'Gema',
  'Diana',
  'Sara',
  45,
];

/*
    .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
    en base a los resultados de esa funcion

    es como un for recursivo
*/

// const nombresMayus = nombres.map((nombre) => {
//   return nombre.toUpperCase();
// });
// console.log(nombresMayus);

// const nombresMayus = nombres.map((nombre) => nombre.toUpperCase());
// console.log(nombresMayus);

// forma mas corta de hacer el mismo codigo, la funcion flecha da por hecho que hay un return por tanto
// no es necesario ponerlo

/*
    .filter()
    Nos permite ejecutar una funcion por cada elemento y luego crear un arreglo en base
    a los resultados de esa funcion
*/

/*
Diferencia con map: Map crea un nuevo arreglo con el mismo numero de elementos del arreglo original
En el caso de filter: Crear un arreglo nuevo pero unicamente devuelve los resultados que cumplan con una condicion
*/

// quiero que me devuelvas unicamente los elementos con 4 letras
/*Devuelve una lista de 2 o con los elementos que cumplan la condicion
si lo hicieramos con map nos devolveria los mismos 2 mas el resto de elementos como "undefined" */

const nombresCuatroLetras = nombres.filter((nombre) => {
  if (nombre.length === 4) {
    return nombre;
  }
});
console.log(nombresCuatroLetras);

/*
    .includes()
    Nos permite saber si el arreglo contiene un elemento especificado
    retorna una funcion booleana
*/

console.log(nombres.includes('Julio'));
// retorna false por que el nombre/elemento no esta dentro de la lista
console.log(nombres.includes('Carlos'));

/*
    .evert()
    Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si TODOS los elementos cumplieron
    la condicion
*/

const nombresValidos = nombres.every((nombreT) => {
  if (typeof nombreT === 'string') {
    return true;
  } else {
    return false;
  }
});

console.log('¿Todos los elementos son validos? ' + nombresValidos);

/*
    .some()
    Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si algun elemento cumplio la condicion
*/

const nombresValidosS = nombres.some((nombreT) => {
  if (typeof nombreT !== 'string') {
    return true;
  } else {
    return false;
  }
  k;
});

console.log('¿Todos los elementos son validos? ' + nombresValidosS);
// true si hay algun valor invalido
// false si hay algun valor valido
