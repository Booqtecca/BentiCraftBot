const util = require("minecraft-server-util")
const Discord = require("discord.js")
const config = require("../config.json")

module.exports = {
    name: "status",
    run: async(client, message, args) => {
        util.queryFull(`45.134.8.12`, { port: 19171 }).then((response) =>{

        
        
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(config.name)
        .setDescription("☑️ Servidor en linea")
        .setThumbnail(config.img)
        .addFields(
            {name: 'ip and Port', value: `${config.ip} | ${config.port}`},
            {name: `Motd`, value: config.name},
            {name: 'Version', value: response.version},
            {name: 'Online Players', value: `${response.onlinePlayers} de ${response.maxPlayers}`},
            {name: 'Players:', value: `[ ${response.players} ]`},

        )
        
    message.channel.send(embed)
        })
        .catch((error) => {
            const embederror = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(config.name)
        .setDescription("❌ Servidor Offline")
        .setThumbnail(config.img)
        .addFields(
            {name: 'ip and Port', value:`${config.ip}| ${config.port}`},
            {name: `Motd`, value: "error"},
            {name: 'Version', value: "error"},
            {name: 'Online Players', value: `-1 de $-1`},
            {name: 'Players:', value: `[ ]`},
            )
            message.channel.send(embederror)
        })

        
    }
}

