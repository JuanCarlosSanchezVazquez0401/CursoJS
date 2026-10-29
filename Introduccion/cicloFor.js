const nombre = [
  'Carlos',
  'Christian',
  'Chistopher',
  'Estefania',
  'Erika',
  'Manuel',
  // 'karla',
];

nombre.forEach((nombre) => {
  console.log(nombre);
});

/*
    ciclo for
    repite un bloque de codigo mientra se cumpla una condicion

    Expresion 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de codigo
    Expresion 2: Una condicion, mientras se cumpla se ejecutara el bloque de codigo
    Expresion 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de codigo
*/

for (let numero = 0; numero <= 6; numero++) {
  //   numero += 1;
  //numero++;
  /*tener mucho cuidado con la tercera expresion, ya que si esta abierto en live server al hacer el cambio
    en tiempo real, se suele congelar antes de terminar de declarar la expresion*/
  console.log(nombre[numero]);
}
