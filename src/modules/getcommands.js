// este archivo se encargara de obtener los datos del json, y ocuparlo como comandos.
const fs = require("fs");
const path = require("path");

let file = path.join(__dirname + "/json/commands.json"); // configuramos el filename del json a utilizar

let getcommands = () => {
	let data = fs.readFileSync(file, "utf-8");

	let info = JSON.parse(data); // pasamos a json la data recibida.
	
    let commands = info['commands']; // del json data, obtenemos los comandos.

    return commands; // retornamos los comandos para ocupar en el otro js.
};


module.exports.commands = getcommands(); // exportamos la funcion para obtener los comandos


