// tiene problema, se encarga de dos cosas, suma e imprime
// las funciones deben ocuparse de una cosa, modularidad

// const operacion = (tipo, numero1, numero2) => {
//   let resultado;

//   // console.log(2 + 5);
//   if (tipo === 'suma') {
//     resultado = numero1 + numero2;
//   } else if (tipo === 'resta') {
//     resultado = numero1 - numero2;
//   }

//   return resultado;
//   //indica que queremos retornar un valor
// };

// const miVar = operacion('suma', 20, 5);
// console.log(miVar);

const operacion = (tipo, numero1, numero2) => {
  if (tipo === 'suma') {
    return numero1 + numero2;
  } else if (tipo === 'resta') {
    return numero1 - numero2;
  }
};
const miVar = operacion('suma', 20, 5);
console.log(miVar);
/*return devuelve el valor que encuentre primero de "return" y posteriormente a esto hace un break */

// const operacion = (tipo, numero1, numero2) => {
//   // console.log(2 + 5);
//   if (tipo === 'suma') {
//     console.log(numero1 + numero2);
//   } else if (tipo === 'resta') {
//     console.log(numero1 - numero2);
//   }

//   return 'hola';
//   //indica que queremos retornar un valor
// };

// const miVar = operacion('suma', 20, 5);
// console.log(miVar);
