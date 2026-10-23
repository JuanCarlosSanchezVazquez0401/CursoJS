// const saludo = () => {
//   console.log('hola Carlos');
// };

// saludo();

/* 
- Parametros  - los valores especificados en la definicion
- Argumentos - los valores que le pasamos a la funcion cuando la invocamos 
*/

const saludo = (nombre = 'amigo') => {
  console.log(`Hola ${nombre}`); //backssticks altgr + }
};
// si mando a llamar saludo sin nada retorna undefined, por eso es importante ponerle un valor por defecto
saludo('Carlos');
saludo('Alex');
saludo('Cesar');

// Parametros permiten funcion dinamica

/*Multiples parametros */

const operacion = (tipo, numero1, numero2) => {
  // console.log(2 + 5);
  if (tipo === 'suma') {
    console.log(numero1 + numero2);
  } else if (tipo === 'resta') {
    console.log(numero1 - numero2);
  }
};

operacion('suma', 20, 5);
operacion('resta', 20, 5);
