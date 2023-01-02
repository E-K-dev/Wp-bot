// Este archivo contendra el menu principal, el cual sera ejecutado.
let comandos = require("./getcommands.js"); // requerimos el archivo del cual se obtendran los comandos.
let datos_del_script = require("./getscriptdata.js"); // requerimos el archivo en el cual se obtendran los datos del script modificables.

// Creamos un menu.
let menu = () => {
	// creamos una variable que contenga los datos del menu
	let result = `*${datos_del_script.scriptdata["description"]}*.\n
✅ Version del bot *${datos_del_script.scriptdata["version"]}*.\n
✅ Creador del bot *${datos_del_script.scriptdata["author"]}*.\n
✅ Lenguaje del bot *${datos_del_script.scriptdata["language"]}*.\n
✅ Ultima version del bot *${datos_del_script.scriptdata["lastversion"]}*. \n
Los comandos que tengo disponibles son:\n
✅	*${comandos.commands[0]}* - Recibe un saludo instantaneo.\n
✅	*${comandos.commands[1]}* - Recibe una despedida. \n
✅	*${comandos.commands[2]}* - Muestra de nuevo este menu.`;

	// retiramos el result
	return result;
};

module.exports.menu = menu(); // exportamos el menu.
