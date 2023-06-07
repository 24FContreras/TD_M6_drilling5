const verificaParametrosEntrada = (argumentosEntrada) => {
  if (argumentosEntrada.length == 0) {
    console.log(
      "Porfavor ejecutar programa con alguna de las siguientes opciones"
    );
    console.log("Opcion 1: leer");
    console.log("Opcion 2: agregar propiedad valor");
    console.log("Opcion 2: eliminar propiedad");
    return process.exit();
  }
};

module.exports = verificaParametrosEntrada;
