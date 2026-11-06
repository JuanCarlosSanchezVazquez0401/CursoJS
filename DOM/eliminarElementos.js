const eliminarCaja = () => {
  // si presionas f2 sobre un variable la reemplaza automaticamente por lo que le digas
  const padre = document.getElementById('contenedor1');
  const cajaAEliminar = padre.querySelector('.caja');
  //   const cajaAEliminar = padre.querySelectorAll('.caja');
  console.log(cajaAEliminar);

  /*
  removeChild() de JavaScript solo acepta un nodo individual como argumento
  si la usamos con querySelectorAll que retorna un "nodelist" - una coleccion de elementos
  falla, si se quiere quitar mas de un elemento se puede usar forEach + remove  
  */
  if (cajaAEliminar) {
    padre.removeChild(cajaAEliminar);
  }

  // recorre cada elemento de la lista y lo remueve
  //   cajaAEliminar.forEach((caja) => caja.remove());
};
