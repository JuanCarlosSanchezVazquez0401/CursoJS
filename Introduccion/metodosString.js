// metodos no llevan parentesis

/* lenght - devuelve el numero de caracteres de una cadena de texto  */

// const texto = 'Hola yo soy carlos';
// console.log(texto.length);

/* .indexOf() - .lastIndexOf() - devuelve el index del primer / ultimo caracter especificado*/

const texto = 'hOla yo soy carlos';

console.log(texto.toLowerCase().indexOf('o')); // primero
console.log(texto.toLowerCase().lastIndexOf('o')); // ultimo

// si aparece -1 significa que el elemento no existe, de preferencia hacer la conversion a lower

/* .slice() - Devuelve un fragmento de una cadena de texto. 
1er parametro - index desde donde queremos cortar
2do parametro (opcional) - index hasta donde queremos cortar */

const texto1 = 'Hola yo soy carlos!';
const index = texto1.indexOf('c');
const lastIndex = texto1.lastIndexOf('s');
console.log(texto1.slice(index, lastIndex)); // podemos especificar posicion o usar un meto dentro
console.log(texto1.slice(-7, -1)); // tambien se puede trabajar de derecha a izquierda
console.log(texto1); // no afecta la variable

/* .replace() - Devuelve una cadena de texto en donde remplaza un valor por otra
1er parametro - el texto que queremos reemplazar
2do paramentro - el texto que queremos poner*/

console.log(texto.replace('carlos', 'Arturo')); // importante escribir con mayusculas y minusculas

/* .split() - convierte una cadena de texto en un arreglo.
Tenemos que especificar donde cortar cada elemento

1er parametro - el caracter que funcionara como separador*/
console.log(texto.split(' '));

/* .toUpperCase() - .toLowerCase()
Devuelve una cadena de texto de puras minusculas/mayusculas */

console.log(texto.toUpperCase);
console.log(texto.toLowerCase);
