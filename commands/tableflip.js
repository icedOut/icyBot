const { getEmoji, getAllEmoji, getThemes } = require('random-text-meme');

module.exports = {
	name: 'tableflip',
	description: 'Flip that table ',
	execute(message, args) {
        x = getEmoji('flip-table');
        message.channel.send(x);
	},
};