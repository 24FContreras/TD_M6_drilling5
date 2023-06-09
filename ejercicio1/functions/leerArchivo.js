const fs = require("fs/promises");

const leerArchivo = async () => {
  let objetoDatos = {};

  try {
    const datos = await fs.readFile("datos.txt");
    if (datos.length == 0) {
      return console.log("El archivo se encuentra vacio");
    }
    console.log(JSON.parse(datos));
  } catch (error) {
    console.log("Lo sentimos, ha ocurrido un error");
    console.log(error);
  }
};

module.exports = leerArchivo;
