module.exports = {
	name: 'cena',
	description: 'And his name is jooooooooooooohn ceeeeeeena',
	execute(message, args) {
        var voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sound/cena.mp3')
			connection.on('error', e => console.log(e));
			connection.on('debug', d => console.log(d));
			dispatcher.on("end", end => {
			  voiceChannel.leave();
			});
		})
	},
};