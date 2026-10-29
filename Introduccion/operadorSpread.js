/* Operador Spread
Permite tomar los elementos de un arreglo u objeto y expandirlos a otro sitio 
es = ...[otro arreglo]
siiempre se mantiene actualizado*/

const frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
  nombre: 'arturo',
  correo: 'correo@correo.com',
  password: '123',
};

/* tambien funciona para propiedades de objetos */
const datosUsuario = {
  nombre: 'carlos',
  /*si yo tengo al preestablecido como aqui "nombre" cuando llegue al spread lo actualiza al que agregamos
  si quiero que aparezca el ultimo, primero pongo el spread y luego declaro  */
  ...datosLogin,
  edad: 27,
};

console.log(datosUsuario);

/* Parametros Rest
Permite que una funcion contenga un numero indefinido de argumentos.
Los argumentos extra que encuentre los convertira en un arreglo 
en este caso = ...[nombre] = ...datoAdicionales - crea un nuevo arreglo y puedo usarlo tal cual*/

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
  console.log(nombre, correo, datosAdicionales);
};

registrarUsuario('carlos', 'correo@carlos.com');
registrarUsuario('Alejandro', 'correo@Alejandro.com', 28, 'España');

/* 
Destructuracion de objetos
Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable 
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos; // significa que de amigos queremos extraer valores
/* Depende de lo que le demos entre [] */
console.log(tercerAmigo);

const persona = {
  nombre: 'Carlos',
  edad: 27,
  pais: 'Mexico',
};

const { nombre, pais } = persona;
// cuando se usa para arreglos se cambian los [] -> {}
console.log(nombre, pais);

/* Para que reciba un objeto es necesario encerrar el argunmento con {}
una vez hecho esto cuando llamemos el metodo simplemente podemos mandar a llamar el objeto completo y asi la funcion
automaticamente encontrara las referencias */
const mostrarEdad = ({ nombre, edad }) => {
  console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(persona);
