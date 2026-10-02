// Switch = can be an efficient replacement to many elif statements

let day = 1;

switch (day) {
  case 1:
    console.log('Es Lunes');
    break;
  case 2:
    console.log('Es Martes');
    break;
  case 3:
    console.log('Es Miercoles');
    break;
  case 4:
    console.log('Es Jueves');
    break;
  case 5:
    console.log('Es Viernes');
    break;
  case 6:
    console.log('Es Sabado');
    break;
  case 7:
    console.log('Es Domingo');
    break;
  default:
    console.log('No corresponde a ningun dia');
    break;
}

// Switch compara === valor, lexico, tipo
// En este caso Perro != perro
// Perro entra al arca
// perro no entra al arca

var Animal = 'Perro';
switch (Animal) {
  case 'Vaca':
  case 'Jirafa':
  case 'Perro':
  case 'Cerdo':
    console.log('Este animal subirá al Arca de Noé.');
    break;
  case 'Dinosaurio':
  default:
    console.log('Este animal no lo hará.');
}

var foo = 1;
var output = 'Salida: ';

/*Switch sigue un orden de cascada, pero parte del caso del indice inicial
aqui empieza desde "Cual" por que es el primer 1 que encuentra
Sin embargo partiendo de ese caso el orden no tiene que ser 
forzosamente numerico secuencial, en este caso arroja la frase por que esta en el orden 
correcto, pero al ser una operacion unica sin break lo lee en cascada
no por numero de indice*/
switch (foo) {
  case 10:
    output += '¿Y ';
  case 1:
    output += 'Cuál ';
    output += 'Es ';
  case 4:
    output += 'Tu ';
  case 3:
    output += 'Nombre';
  case 2:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}

let testScore = 93;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = 'A';
    break;
  case testScore >= 80:
    letterGrade = 'B';
    break;
  case testScore >= 70:
    letterGrade = 'C';
    break;
  case testScore >= 60:
    letterGrade = 'D';
    break;
  default:
    letterGrade = 'F';
}

console.log(letterGrade);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
