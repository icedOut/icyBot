const { get } = require("snekfetch");
const Discord = require('discord.js');
module.exports = {
	name: 'cat',
	description: 'CAT!',
	execute(msg, args) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setImage(res.body.file)
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	},
};