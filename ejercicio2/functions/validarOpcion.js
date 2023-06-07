const fs = require("fs");

const validarOpcion = (argumentos, opcion) => {
  const opciones = ["comments", "photos", "albums", "todos", "posts"];

  if (!argumentos.length || !opciones.includes(opcion)) {
    console.log(`Debes ingresar una opción válida para ejecutar el programa
Las opciones son: comments, photos, albums, todos o posts`);

    return false;
  } else return true;
};

module.exports = validarOpcion;
