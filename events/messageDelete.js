const prefix = require('../models/Prefix');

module.exports = async (bot, message) => {
  if(message.author.bot) return;
  bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
}
