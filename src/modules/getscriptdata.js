// este archivo se encargara de obtener los datos relevantes del script, tales como: el author, la version, entre otros.

const fs = require("fs"); // requerimos filesystem.
const path = require("path"); // requerimos el path

let file = path.join(__dirname + "/json/scriptdata.json"); // configurmos el script data a utilizar

const getScriptData = () => {
	let data = fs.readFileSync(file, "utf-8"); // del archivo obtenemos la data.

	let jsoncontent = JSON.parse(data); // convertimos a json la data recibida.

	return jsoncontent["scriptdata"]; // del json sacamos el scriptdata
};

module.exports.scriptdata = getScriptData(); // exportamos el scriptdata.
