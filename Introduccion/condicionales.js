// estructura
// if ( x ) {

// }

// Ejemplo 1

const usuario = {
  edad: 27,
  pais: 'peru',
  ticket: false,
};

if (usuario.edad > 17) {
  console.log(`El usuario es mayor de edad y pueda entrar al concierto`);
}

if (usuario.edad >= 18 && usuario.ticket == true) {
  console.log(`Puede entrar al concierte ${usuario.ticket}`);
} else {
  console.log(`No tiene acceso ticket: ${usuario.ticket}`);
}

if (usuario.edad >= 18 && usuario.ticket == true) {
  if (usuario.pais == 'Mexico') {
    console.log(
      `El usuario es de ${usuario.pais} y tiene ticket: ${usuario.ticket}`
    );
  } else {
    console.log(
      `El usuario no es Mexicano es de ${usuario.pais} pero tiene ticket: ${usuario.ticket}`
    );
  }
} else {
  console.log(`No tiene acceso ticket: ${usuario.ticket}`);
}

//elif
// !== "diferente que" igual al resto de lenguajes de programacion, valor y tipo
// != Diferente que JS,  solo evalua valor e intenta igual tipo

if (usuario.edad >= 18 && usuario.ticket == true) {
  console.log(`Puede entrar al concierto ${usuario.ticket}`);
} else if (usuario.pais !== 'Mexico') {
  console.log('El usuario no tiene ticket no es Mexicano');
} else {
  console.log(`El usuario no tiene ticket y es Mexicano`);
}

if (usuario.pais === 'Mexico') {
} else if (usuario.pais === 'colombia') {
} else if (usuario.pais === 'españa') {
}
