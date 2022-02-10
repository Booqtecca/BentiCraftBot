const { MessageEmbed } = require("discord.js")
const config = require("../config.json")

module.exports = {
 name: "ip",
 run: async(client, message, args) => {
 let ip = new MessageEmbed()
 .setTitle(`Hola se ve que buscas la IP`)
 .setDescription(`>>>>>>>>>>>>\n\nIp: ${config.ip} \n\nPort: ${config.port}\n\n<<<<<<<<<<<<`)
 .setColor("RED")
 .setThumbnail(config.img)
 
 message.channel.send(ip)
 }
}

