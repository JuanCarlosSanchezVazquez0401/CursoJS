/* Ciclo ForEach 
    Es un metodo de los arreglos que podemos usar para recorrer los elementos
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.forEach((amigos, index) => {
  console.log(`El amigo # ${index} es: ${amigos}`);
});

/* Ciclo for in
Nos permite recorrer las propiedades de un objeto */

const persona = {
  nombre: 'Carlos',
  edad: 24,
  correo: 'carlos@correo.com',
};

/*Similar al for i in range */
for (i in persona) {
  console.log(i, persona[i]);
}

/*
Ciclo for of 
Nos permite recorrer los valores de un objeto iterable.
Podemos recorrer: Arreglos, cadenas de texto, mapas y listas de nodos, etc*/

const etiquetas = document.head.children;
console.log(etiquetas);

for (elemento of etiquetas) {
  console.log(elemento);
}
