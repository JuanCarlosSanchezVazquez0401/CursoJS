const nombres = [
  'Carlos',
  'Arturo',
  'Alejandro',
  'Roberto',
  'Adrian',
  'Antonio',
  'Angel',
];

// for (let i = 0; i <= nombres.length; i++) {
//   if (nombres[i][0] === 'A') {
//     console.log(nombres[i]);
//   } else {
//     // continue;
//     console.log('no es un nombre que empiece por A');
//   }
// }

for (let i = 0; i <= nombres.length; i++) {
  if (nombres[i][0] !== 'A') {
    console.log('No cumple la condicion');
    break;
  } else {
    console.log(nombres[i]);
  }
}

/* Continue 
La sentencia continue nos sirve para saltar a la siguiente iteracion */

// const nombres1 = [
//   'Jorge',
//   'Arturo',
//   'Alejandro',
//   'Roberto',
//   'Adrian',
//   'Antonio',
//   'Angel',
// ];

// for (let i = 0; i <= nombres1.length; i++) {
//   if (nombres1[i][0] !== 'A') {
//     console.log(nombres1[i]);
//   } else {
//     console.log('no es un nombre que empiece por A.2');
//     continue;
//   }
//}

/* Nota importante en JS los for se sobreponen en este caso si se ejecutan al mismo tiempo
el resultado apila los resultados iguales de ambos bucles aunque sean distintos */
