module.exports = {
	name: 'opgg',
	description: 'OP.gg summoner level lookup!',
	execute(message, args) {
var opn =require('opn');
 var url = 'https://na.op.gg/summoner/userName='+args[0]
 opn(url)
}

}
