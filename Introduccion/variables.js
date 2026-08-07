/*variables = espacios en memoria donde podemos guardar info que nuestro sitio web o app va a
utilizar para realizar operaciones*/

//crear

var edad = 24;
//var es global

console.log(edad); // llamar a consola

/*Reglas

Empiezan por letra
Puede empezar unicamente con simbolos $ o _ 
cada variable es unica 
no palabras reservadas

Tipos de datos que podemos guardar

string - cadena de texto
number - numero
boolean - Booleano True or false
objet - Objeto 
Function - Funciones

null - valor nulo
undefined - valor sin definir
*/

// var es la forma antigua es mejor usar:
/*let y const son variables locales
Diferencias entre ellos
let: se puede actualizar 
const: es inmutable, no se puede redefinir*/
let nombre = 'Carlos';
const correo = "correo@.com"
console.log(nombre, correo);


/*let telefono;
let pais;
let id;
*/

let telefono, pais,id;
telefono = 5561956380;
pais = 'Mexico';
id = "0401";
console.log(telefono, pais, id);

const resultado = 4+4;
console.log(resultado);

const nombre1 = "Carlos";
const nombre2 = "Juan";
const nombreCompleto = nombre2 + " " + nombre1;
console.log(nombreCompleto);

let miVariable = "texto";
miVariable = 7;
console.log(miVariable);