const Discord = require("discord.js")
const config = require("../config.json")

module.exports = {
name: "say",
  
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("no tienes permisos para usar este comando")
  
    const mensaje = message.content.split(" ").slice(1).join(" ")
    
    if(!mensaje) return message.channel.send("que se va a enviar?")
    
    await message.delete()
    
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(mensaje)
    .setThumbnail(`${config.img}?size=dynamic`)
    
    message.channel.send(embed)
    
    
    //esperame xd
    
    
  }
}

