/* Operadores aritmeticos
    = Operador de asignacion. Se usa para asignar valores a una variable
    + Suma
    - Resta
    * Multiplicacion 
    / Division
    % Modulo
    ++ Aumento
    -- Decremento
*/

// const resultado = 10 + 10;
// const resultado2 = 10 - 10;
// const resultado3 = 10 % 3;

let numeroAum = 1;
// numero = numero + 1;
numeroAum++;

let numeroDec = 1;
numeroDec--;

console.log(numeroDec);

/* Operadores de asignacion
    += Suma un numero al valor de una variable
    -= Resta un numero al valor de una variable
    *= Multiplica un numero al valor de una variable
    /= Divide un numero al valor de una variable
    %= Obtiene el sobrante de una division y lo asigna a la variable
*/

let numero = 10;
// numero = numero + 5;
numero += 5;

console.log(numero);


/* Operadores de comparacion
Nos permiten comparar valores 
    ==  Igual que
    === Igual al valor y tipo de valor 
    !=  Diferente
    !== Diferente en valor y diferente en tipo
    <   Mayor que
    >   Menor que
    <=  Menor igual que
    >=  Mayor igual que 
    ? Operador ternario - Nos permite hacer comparaciones y ejecutar el codigo si se cumple una condicion*/
    // El operador ternario nos permite hacer condicionales de una sola linea de codigo 

// const resultado = 5 > 1 ;
// const resultado = 20 >= 20 ;
// const resultado = 10 == 10 ; // Solo compara el valor
// const resultado = 10 === '10' ; // Este es el equivalente a == en otros lenguajes de programacion 
const resultado = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero'; 
console.log(resultado);

