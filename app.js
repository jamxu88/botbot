const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Logbot Online");
});
const prefix = "=";
client.on("message", (message) => {
	if (message.author.id === '672235119771254785' || message.channel.id === '671421299976962068' || message.author.id === '684565597027041323' || message.channel.id === '684567655751221354') return;
	if (message.attachments.size > 0) {
		var Attachment = (message.attachments).array();
		console.log(message.author.tag + ': "' + message.content + '" __with attachment:__ ' + Attachment[0].url + ' in channel #' + message.channel.name);
		client.channels.get("671414066157191185").send('> **' + message.author.tag + '**: "' + message.content + '" __with attachment:__ ' + Attachment[0].url + ' in channel **#' + message.channel.name + '**')
	}else {
	console.log(message.author.tag + ': "' + message.content + '" in channel #' + message.channel.name);
	client.channels.get("671414066157191185").send('> **' + message.author.tag + '**: "' + message.content + '" in channel **#' + message.channel.name + '**')
	}
  });
client.login(process.env.BOT_TOKEN);
