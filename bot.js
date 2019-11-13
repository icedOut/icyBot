'use strict';
const fs = require('fs');

const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const { get } = require("snekfetch");
const ytdl = require('ytdl-core');
const DOG_API_URL   = "https://api.thedogapi.com/";
const DOG_API_KEY   = "97bccc14-dd2b-408d-b162-c3db4d60cd33"; 
const DISCORD_TOKEN = 'NjQyODU4ODE4MTQwODk3MzA1.XcdN6Q.PuY0odzjQCARg2xThPMNuTHUv2s';
const prefix = "!";
const queue = new Map();

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
  console.log(`Icy2Ready`);
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('message',  async msg => {
	if (msg.author.bot) return;
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	const args = msg.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	const serverQueue = queue.get(msg.guild.id);
  switch (command){
	  
	  case 'ping':
		   client.commands.get('ping').execute(msg, args);
		   break;
	   
	  case 'cat':	
			client.commands.get('cat').execute(msg, args);
			break;
		
	  case 'dog':
			client.commands.get('dog').execute(msg, args);
			break;
	  case 'commands':
			client.commands.get('commands').execute(msg, args);
			break;
	  case 'opgg':
			client.commands.get('opgg').execute(msg, args);
			break;
	  case 'cena':
			client.commands.get('cena').execute(msg, args);
			break;
	  case 'triple':
			client.commands.get('triple').execute(msg, args);
			break;
	  case 'mad':
			client.commands.get('mad').execute(msg, args);
			break;
			case 'babydeck':
			client.commands.get('babydeck').execute(msg, args);
			break;
	  case 'tableflip':
			client.commands.get('tableflip').execute(msg, args);
			break;

		
  }
  if (msg.content.startsWith(`${prefix}play`)) {
		execute(msg, serverQueue);
		return;
	} else if (msg.content.startsWith(`${prefix}skip`)) {
		skip(msg, serverQueue);
		return;
	} else if (msg.content.startsWith(`${prefix}stop`)) {
		stop(msg, serverQueue);
		return;
	} 
});
  

async function execute(message, serverQueue) {
	const args = message.content.split(' ');
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}
	 


const ytSearch = require( 'yt-search' )
var i ;
var recherche = "";
for ( i = 1 ; i < args.length ; i++){
if (typeof args[i] !== 'undefined')	
recherche = recherche + args[i]
}
var x = ytSearch( recherche, function ( err, r ) {
  if ( err ) throw err
 
  const videos = r.videos
  const playlists = r.playlists
  const accounts = r.accounts
 
  const firstResult = videos[ 0 ]
  connection(firstResult)
 
 
 async function connection(song){
	 
 if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};
		queue.set(message.guild.id, queueContruct);
		queueContruct.songs.push(song);
		message.channel.send(`${song.title} has been added to the queue!`);
		

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}
}
  
} );

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

client.login(DISCORD_TOKEN);


