/*
Scope Bloque
    - Pertenecen todas las variables declaradas con const o let dentro de un bloque {}
    - Solo podemos acceder a ellas dentro del bloque
Solamente podemos acceder a las variables dentro del propio bloque en el que fueron creadas
*/

const edad = 19;

if (edad >= 18) {
  const accesoPermitido = true;
  console.log(accesoPermitido);

  if (true) {
    console.log(accesoPermitido);
  }

  const miFuncion = () => {
    console.log(accesoPermitido);
  };
  miFuncion();
}

//no accesible busca la var, pero no la encuentra por que esta dentro del bloque if
// console.log(accesoPermitido);

// desventaja de var es accesible desde fuera
if (true) {
  var nombre1 = 'Carlos';
  console.log(nombre1);
}
console.log(`Accediendo a ${nombre1} desde afuera`);
