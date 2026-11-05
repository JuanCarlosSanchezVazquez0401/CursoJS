/* Propiedad - elemento.innerHTML
    Nos permite obtener y cambiar el contenido HTML de un elemento
*/

const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = '<b>Hola!</b>'; //inyectar HTML

/*
    elemento.attribute
    Nos permite acceder y cambiar atributos del elemento

    si no tiene el elemnto lo crea
    si lo tiene lo sobreescribe

    value = valor dentro del input o caja de texto
    src = cambiar ruta de la imagen
    */

primeraCaja.id = 'nuevo-id';

/*
    elemento.setAttribute()
    Nos permite agregar o establecer el valor de un atributo o elemento
    RECIBE 2 PARAMETROS
                ("atributo a modificar, valor")
*/

primeraCaja.setAttribute('class', 'caja activa');
//para un atributo personalizado ->
primeraCaja.setAttribute('data-id', '123-456-789');

/* elemento.style.property
    Nos permite cambiar los estilos css de un elemento
*/

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja');
console.log(contenedor2Caja1);
contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = 'white';
//algunas propiedades aqui se llaman distinto como text-transform = textTransform
// no acepta guiones entonces cambia los guiones por cammelCase
contenedor2Caja1.style.textTransform = 'uppercase';
