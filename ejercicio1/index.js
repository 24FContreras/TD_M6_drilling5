const eliminaPropiedad = require("./functions/eliminarPropiedad.js");
const escribirDatos = require("./functions/escribirDatos.js");
const leerArchivo = require("./functions/leerArchivo.js");
const verificaParametrosEntrada = require("./functions/verificarParametros.js");

const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];
const propiedad = argumentosEntrada[1];
const valor = argumentosEntrada[2];

const validarOpcionesEntrada = () => {
  switch (opcion) {
    case "leer":
      //Codigo para leer el archivo
      leerArchivo();
      break;
    case "agregar":
      //Codigo para agregar o modificar propiedad
      escribirDatos(propiedad, valor);
      break;
    case "eliminar":
      //Codigo para eliminar propiedad
      eliminaPropiedad(propiedad);
      break;
    default:
      //Codigo para informar al usuario
      verificaParametrosEntrada(argumentosEntrada);
  }
};

validarOpcionesEntrada();
