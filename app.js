const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Parliament Bot");
});
client.on("message", (message) => {
function react() {
  message.react("🔽");
}
if(message.author.bot) return;
if (message.content.startsWith("'")) {
  setTimeout(react,500);
  message.react("🔼");
}
});
client.login(process.env.BOT_TOKEN);
