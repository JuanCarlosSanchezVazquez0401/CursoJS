/* Operadores logicos
&& and
|| OR
! Not*/ 

const nombre = 'Carlos';
const edad = 17;
const tieneEntrada = false; 
const tienePermiso = true;

// const permitirAcceso = edad >= 18 && tieneEntrada == true;

// console.log(permitirAcceso + " " + "Acceso permitido al concierto, edad: " + edad );

const permitirAcceso = edad >= 18 && (tieneEntrada ||  tienePermiso);
console.log('Acceso permitido al concierto: ' + permitirAcceso);
