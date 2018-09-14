const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDg5NTI3MDU5NTI2NDUxMjIw.DnyX6g.Zd0TwdY6DMGZg6SyuqdE3anhenE');