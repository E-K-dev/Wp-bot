const { Client, LocalAuth } = require("whatsapp-web.js"); // vamos a estar utilizando LocalAuth.
const qrcode = require("qrcode-terminal"); // requerimos qr-code terminal
const menu_help = require("./modules/menu.js"); // requerimos el menu de inicio
const comandos_wp = require("./modules/getcommands.js"); // requerimos el archivo del cual se obtendran los comandos.

// Definimos un obj, y le pasamos el auth a utilizar.
const client = new Client({
	authStrategy: new LocalAuth({
		clientId: "client-one", //Un identificador(Sugiero que no lo modifiques)
	}),
});

client.initialize(); // inicializamos el cliente.

client.on("qr", async (qr) => {
	// cuando reciba el qr.code
	console.clear();
	console.log(
		"Ok, como no tiene guardado el qr, tendras que escanear este: \n\n"
	);
	qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
	// cuando el cliente estee listo, entonces hara.
	console.clear();
	console.log("Listo, todo ocurrio exitosamente !\n\nEsperando el mensaje\n\n");
});

// Comandos para el mensaje
client.on("message", async (message) => {
	let COMANDO = comandos_wp.commands; // igualamos los comandos a una nueva variable para que sea mas entendible

	let mymsg = message.body.toLowerCase(); // creamos una variable la cual , estara recibiendo los mensajes y los ira convirtiendo a minusculas para posteriormente, leerlos en el switch

	// Creamos un switch el cual obtendra los mensajes entrantes.
	switch (mymsg) {
		// por medio de casos, accederos a los distintos comandos del bot, con el fin de simplificar todo.
		case COMANDO[0]: // en caso de que se ejecute el saludo
			client.sendMessage(
				message.from,
				`Hola soy *WP-BOT.JS* , espero que te guste este bot!`
			);
			console.log(`El usuario ha ejecutado el comando ${COMANDO[0]}\n`); // imprimimos un log del comando que se haya ejecutado.
			break;

		case COMANDO[1]: // en caso de que se ejecute la despedida
			client.sendMessage(message.from, `Nos vemos !`);
			console.log(`El usuario ha ejecutado el comando ${COMANDO[1]}\n`); // imprimimos un log del comando que se haya ejecutado.
			break;

		case COMANDO[2]: // en caso de que se ejecute el menu
			message.reply(menu_help.menu); // respondemos al mensaje con el menu.
			console.log(`El usuario ha ejecutado el comando ${COMANDO[2]}\n`); // imprimimos un log del comando que se haya ejecutado.
			break;

		default: // por si ninguna condicion se cumple.
			message.reply(
				"Comando Invalido\n\nPuedes escribir *help*, para obtener el menu de ayuda."
			);
			console.log("El usuario ha ejecutado un comando invalido \n");
			break;
	}
});
