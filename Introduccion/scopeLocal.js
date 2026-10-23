/*
LocalScope o variables locales
- son variables declaradas dentro de una funcion
- Solo podemos acceder a ellas desde dentro de la funcion
*/

/*El funcionamiento de var cambia dependiendo del contexto, si se utiliza en general
var puede funcionar como una variable global, pero si se utiliza dentro de una funcion o bloque de codigo
se convierte automaticamente en una variable local, por lo que hay que tener cuidado ya que se puede repetir
el nombre de la variable con diferentes valores */
var numero = 1;

var obtenerNumeroLetras = (nombre) => {
  var numero = nombre.length;
  console.log(`${nombre} tiene ${numero} letras`);

  var funcionAnidad = () => {
    console.log(numero);
  };
  funcionAnidad();
};
obtenerNumeroLetras('Carlos');
// console.log(numero);
// manda a llamar la variable de fuera - Global
