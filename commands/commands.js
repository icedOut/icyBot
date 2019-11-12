const Discord = require('discord.js');
const ex =new Discord.RichEmbed()
ex.setColor('#0099ff')
ex.setTitle('Commands')
ex.addField('!cat' , ' Pictures of cats ' )
ex.addField('!dog' , ' Pictures of dogs ' )
ex.addField('!play  - Your search - '  , ' Searches youtube with the argument provided, and plays found song in users voice channel')
ex.addField('!stop' , ' Stops the musicbot')
ex.addField('!pause' , ' Pauses the music')
ex.addField('!ping' , 'pong')
module.exports = {
	name: 'commands',
	description: 'List of available commands',
	execute(message, args) {
		message.channel.send(ex);
		
	},
};