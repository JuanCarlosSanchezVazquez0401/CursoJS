/* Tipos de datos que podemos guardar

string - cadena de texto
number - numero
boolean - Booleano True or false
objet - Objeto 
Function - Funciones

null - valor nulo
undefined - valor sin definir */

// Cadena de texto

const nombre = 'carlos';
const parrafo = "Este es un 'parrafo'"; // para usar comillas dentro de otras se usan las contrarias
const parrafo2 = 'Este es un "parrafo"';
const parrafo3 = 'Este es un "parrafo"'; // forma de que acepte las comillas

// number

const numero = 4;
const numero2 = -4.12345;

//boolean

const usuarioConectado = true; // or false
const mayorQue = 1 > 2;

// console.log(mayorQue)

// Arrays

const arreglo = [1, 10, 5];
console.log(arreglo);
const arreglo2 = ['texto', 456, true, { property: 'valor' }, [1, 2, 3]];
console.log(arreglo2);

// objeto
// clave(propiedad): valor

const persona = {
  nombre: 'Carlos',
  edad: 27,
  carro: {
    marca: 'Pontiac',
    color: 'naranja',
  },
};

console.log(persona.carro.color);

// function

function hola() {
  console.log('hola');
}

hola();

//null
// normalmente lo usamos cuando queremos especificar que un valor sea nulo

const miVariable = null; // se suele usar para reiniciar una variable cuyo valor no conocemos

// undefined
// Undefined se usa para indicarnos que un valor no esta definido
const miVariable2 = undefined; // no usar: Js lo usa por defecto
