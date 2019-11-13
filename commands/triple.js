module.exports = {
	name: 'triple',
	description: 'OUHHHH baby a triple',
	execute(message, args) {
        var voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sound/triple.mp3')
			connection.on('error', e => console.log(e));
			connection.on('debug', d => console.log(d));
			dispatcher.on("end", end => {
			  voiceChannel.leave();
			});
		})
	},
};