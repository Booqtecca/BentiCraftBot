const { MessageEmbed } = require("discord.js")


module.exports = {
    name: "suggest",
    description: "Make a suggestion and have the community vote",
    category: "Utility",
    usage: "i!suggest <suggestion>",
    run: async (client, message, args) => {
        let suggestion = args.slice(0).join(" ");
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.id === `938830447981506601`);
      
      if(!suggestion) {
        return message.reply("!suggest <sugerencia>")
      }
      
      
        const embed = new MessageEmbed()
            .setTitle("New suggest")
            .setDescription(suggestion)
            .setColor("RANDOM")
            .setFooter(`suggestion make by ${message.author.username}`)
            .setTimestamp()
        SuggestionChannel.send(embed).then(msg => {
            msg.react("✅")
            msg.react("❎")
        message.channel.send("suggest send");
        });
    }
}
