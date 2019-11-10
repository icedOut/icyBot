const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn('RGAPI-1ead8819-b3f8-41a5-9426-2649e369756d')(/*{
    region: REGIONS.NORTH_AMERICA,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'en_US',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
}*/)
module.exports = {
	name: 'lol',
	description: 'summoner level lookup!',
	execute(message, args) {
	kayn.Summoner.by.name('Contractz').callback(function(err, summoner) {
    console.log(summoner.summonerLevel)
})
	
	},
	
	
};


function extract(summoner){
	console.log(summoner)
}