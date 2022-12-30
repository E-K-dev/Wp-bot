const { Client, LocalAuth, Buttons } = require("whatsapp-web.js"); // vamos a estar utilizando LocalAuth.
const qrcode = require("qrcode-terminal"); // requerimos qr-code terminal

const personal = {
	// creamos un objeto en el cual se almacenaran los datos personales del bot.
	developer: "ek-dev", // nombre del author.
	version: "0.6", // version del script.
	description: `WP-BOT.JS - Un bot creado con node js`, // descripcion del bot.
};

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
	console.log("Nuevo Mensaje!\n");
	let commands = [
		// creamos un array con los comandos, de los cuales, el bot podra usar.
		"saludo",
		"despedida",
		"help",
	];

	let errorcommand = `
⚠ *Comando '${message.body}' invalido.*\n
Puede probar de ejecutar *${commands[2]}*, para mostrar el menu de ayuda.`; //en caso de que se ejecute un comando invalido.

	let menu = `*${personal["description"]}*.\n
✅ Version del bot *${personal["version"]}*.\n
✅ Creador del bot *${personal["developer"]}*.\n
Los comandos que tengo disponibles son:\n
✅	*${commands[0]}* - Recibe un saludo instantaneo.\n
✅	*${commands[1]}* - Recibe una despedida. \n
✅	*${commands[2]}* - Muestra de nuevo este menu.`;

	switch (message.body.toLowerCase()) {
		// por medio de casos, accederos a los distintos comandos del bot, con el fin de simplificar todo.
		case commands[0]: // en caso de que se ejecute el saludo
			client.sendMessage(
				message.from,
				`Hola soy *WP-BOT.JS* , espero que te guste este bot!`
			);
			break;

		case commands[1]: // en caso de que se ejecute la despedida
			client.sendMessage(message.from, `Nos vemos !`);
			break;

		case commands[2]: // en caso de que se ejecute el menu
			message.reply(menu); // respondemos al mensaje con el menu.
			break;

		default: // por si ninguna condicion se cumple.
			// respondemos al mensaje con el errorcommand.
			message.reply(errorcommand);
			break;
	}
});
