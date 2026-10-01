// const no puedo sobre escribir
// let si puede

const arreglo = ['Texto', 456.1, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

const amigos = ['alejandro', 'manuel', 'cesar'];
console.log(amigos[0]);

const color = [];
color[0] = 'Rojo';
color[1] = 'verde';
color[4] = 'blanco';
color[4] = 'Amarillo'; // sobre escribe

console.log('El arreglo colores tiene: ' + color.length + ' colores');

color.push('azul'); //agregar al final del array

console.log(color);

const persona = {
  nombre: 'Carlos',
  edad: 27,
  correo: 'correo@correo.com',
  suscripciones: {
    Web: true,
    Correo: true,
  },
  coloresFav: ['Negro', 'Rojo'],
  saludo: function () {
    alert('Hola');
  },
};

console.log(persona.nombre);
console.log(persona['edad']);
console.log(persona.suscripciones.Web);
console.log(persona.coloresFav[0]);
console.log(persona.saludo);

//forma dinamica de accesar a mi objeto
const variable = 'correo';
console.log(persona[variable]);

persona.pais = 'Mexico';
console.log(persona);
//Mandar a llamar la funcion desde un obj
persona.saludo();
