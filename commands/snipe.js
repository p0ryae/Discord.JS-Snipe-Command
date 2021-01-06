const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    const msg = bot.snipes.get(message.channel.id)
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.member.user.displayAvatarURL())
    .setDescription(msg.content)
    .setFooter('Get Sniped lol')
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.config = {
    name: "snipe",
    aliases: []
}
