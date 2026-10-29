/* Ciclo while
Es similar a for, pero con la diferencia de que solo tenemos un condicional.
Mientras se cumpla el condicional se ejecutara el ciclo */

let contador = 0;
while (contador <= 9) {
  console.log('Hola!');
  contador++;
}

/* Ciclo Do while
Es similar al ciclo while, con la diferencia de que ejecuta el bloque de codigo al menus una vez */

let i = 100;
do {
  console.log(i);
  i++;
} while (i <= 10);
