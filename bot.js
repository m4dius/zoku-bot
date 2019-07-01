const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTk1MDE0MTUzMTE5MzM0NDIx.XRlXKQ.SW-Yd7qwsTYwKwhRZpmzHSnGNVA);//where BOT_TOKEN is the token of our bot
