const argumentos = process.argv.slice(2);
const opcion = argumentos[0];
const URL = "https://jsonplaceholder.typicode.com/";

//FUNCIONES
const consultarAPI = require("./functions/consultarAPI.js");
const validarOpcion = require("./functions/validarOpcion.js");

const ejecutarPrograma = () => {
  const validacion = validarOpcion(argumentos, opcion);

  if (validacion) consultarAPI(URL, opcion);
};

ejecutarPrograma();
