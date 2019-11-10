const Discord = require('discord.js');
const ex =new Discord.RichEmbed()
ex.setColor('#0099ff')
ex.setTitle('Commands')
ex.addField('!cat' , ' Pictures of cats ' )
ex.addField('!dog' , ' Pictures of dogs ' )
ex.addField('!play |Youtube URL|'  , ' Plays the soundtrack for the youtube video URL provided in argument')
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