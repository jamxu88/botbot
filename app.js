const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Logbot Online");
});
const prefix = "=";
client.on("message", (message) => {
	if (message.author.id === '672235119771254785' || message.channel.id === '671421299976962068') return;
	if (message.attachments.size > 0) {
		console.log(message.member.user.tag + ': "' + message.content + message.attachments.url + '" in channel #' + message.channel.name);
		client.channels.get("671414066157191185").send('> **' + message.member.user.tag + '**: "' + message.content + message.attachments.url + '" in channel **#' + message.channel.name + '**')
	}else {
	console.log(message.member.user.tag + ': "' + message.content + '" in channel #' + message.channel.name);
	client.channels.get("671414066157191185").send('> **' + message.member.user.tag + '**: "' + message.content + '" in channel **#' + message.channel.name + '**')
	}
  });
client.login(process.env.BOT_TOKEN);
