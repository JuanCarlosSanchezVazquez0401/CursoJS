// alcance o ambito de las variables

/*
Global scope
- son las variables declaradas fuera de una funcion
- podemos acceder a ellas desde cualquier parte del codigo
- podemos usar const, let y var 
*/

var nombre = 'Carlos';
console.log(nombre);

const saludo = () => {
  console.log('Hola ' + nombre);

  nombre = 'Arturo';
  console.log('El nuevo nombre es: ' + nombre);
};
saludo();
