const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong! `' + Math.floor(client.ws.ping) + ' ms`');
  }
});

client.login(config.token);