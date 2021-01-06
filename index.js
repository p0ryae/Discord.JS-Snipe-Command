const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');

mongoose.set('useFindAndModify', false);

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);