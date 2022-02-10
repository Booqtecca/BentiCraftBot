const Discord = require("discord.js")
const client= new Discord.Client
const config = require("./config.json")
const { token } = require("./config.json")

var prefix = config.prefix

client.on("ready", () => {
    console.log(`${client.user.tag} listo`)
    client.user.setActivity("Cerberus Network | -help")
})

const fs = require("fs");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


client.on("guildMemberAdd", async member => {
    client.channels.cache.get("905522638150058054").send(`Welcome to **${config.name}** discord server <@${member.user.id}>`);
})





client.login(token)
