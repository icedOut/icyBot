module.exports = {
	name: 'mad',
	description: 'y u hef 2 b med?????',
	execute(message, args) {
        var voiceChannel = message.member.voiceChannel;
		voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('./sound/mad.mp3')
			connection.on('error', e => console.log(e));
			connection.on('debug', d => console.log(d));
			dispatcher.on("end", end => {
			  voiceChannel.leave();
			});
		})
	},
};