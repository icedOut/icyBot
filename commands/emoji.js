const { getEmoji, getAllEmoji, getThemes } = require('random-text-meme');
module.exports = {
	name: 'emoji',
	description: 'generate random emoji',
	execute(message, args) {
        x =getEmoji();
        console.log(x);
        message.channel.send(x);
	},
};