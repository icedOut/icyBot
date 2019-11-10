'use strict';
const fs = require('fs');

const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const { get } = require("snekfetch");
const DOG_API_URL   = "https://api.thedogapi.com/";
const DOG_API_KEY   = "97bccc14-dd2b-408d-b162-c3db4d60cd33"; 
const DISCORD_TOKEN = 'NjQyODU4ODE4MTQwODk3MzA1.XcdN6Q.PuY0odzjQCARg2xThPMNuTHUv2s';
const prefix = "!";

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
  console.log(`Icy2Ready`);
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	const args = msg.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
  switch (msg.content){
	  
	  case '!ping':
		   client.commands.get('ping').execute(msg, args);
		   break;
	   
	  case '!cat':
			client.commands.get('cat').execute(msg, args);
			break;
		
	  case '!dog':
			client.commands.get('dog').execute(msg, args);
			break;
		
  }
  
});

client.login(DISCORD_TOKEN);


