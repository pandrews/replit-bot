const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        var rev = msg.content.split('j').reverse().join('');
        msg.channel.send(rev);
    }
});

client.login(token);
