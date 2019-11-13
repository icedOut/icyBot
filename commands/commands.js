const Discord = require('discord.js');
const ex =new Discord.RichEmbed()
ex.setColor('#0099ff')
ex.setTitle('Commands')
ex.addField('!cat' , ' Pictures of cats ' )
ex.addField('!dog' , ' Pictures of dogs ' )
ex.addField('!play  - Your search - '  , ' Searches youtube with the argument provided, and plays found song in users voice channel')
ex.addField('!stop' , ' Stops the musicbot')
ex.addField('!skip' , ' skips to the  the song in queue')
ex.addField('!ping' , 'pong')
ex.addField('!cena' ,  'AND HIS NAME IS JOHHHHHHHHN CENA')
ex.addField('!triple' , 'Ohhhhh baby a triple')
ex.addField('!mad' , ' Y u hef 2 b med?!?!')

module.exports = {
	name: 'commands',
	description: 'List of available commands',
	execute(message, args) {
		message.channel.send(ex);
		
	},
};