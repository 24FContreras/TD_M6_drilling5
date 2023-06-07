const fs = require("fs");

const consultarAPI = async (url, opcion) => {
  try {
    const res = await fetch(url + opcion);
    const data = await res.json();

    fs.writeFileSync(`./documents/${opcion}.txt`, JSON.stringify(data));
    console.log(`${opcion} agregados exitosamente al archivo ${opcion}.txt`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = consultarAPI;
