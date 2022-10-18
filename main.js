const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});
const config = require("./config.json");

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(`${config.prefix}ping`)) {
    message.channel.send("pong!");
  } else if (message.content.startsWith(`${config.prefix}foo`)) {
    message.channel.send("bar!");
  }
});

client.login(config.token);
