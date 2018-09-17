const Discord = require('discord.js');
const config = require('config.json');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    function timeCheck() {
      var date = new Date();
      var hour = date.getHours();
      if (hour === 8) {
      console.log("It is midnight, appointing new DingDong of the Day");

      var guild = client.guilds.get(config.guildID);
      var dingDongMember = guild.roles.get(config.dingDongRole).members;


      dingDongMember.forEach(member => {       
        member.removeRole(config.dingDongRole).then(setTimeout(helloDingDong, 1000)).catch(console.error);    
      });
      
       
  function helloDingDong() {
    var newDingDong = guild.members.random();
    newDingDong.addRole(config.dingDongRole).then(console.log(newDingDong)).catch(console.error);
    var dingDongChannel = guild.channels.get(config.speechChannel).send("**Congratulations** " + newDingDong + " **! You're DingDong of the Day! SPEECH! SPEECH! SPEECH!**");
  };

                                   
      setTimeout(timeCheck, 86400000);
    } else {
      console.log("It is not midnight");
      setTimeout(timeCheck, 3600000);
    }
  } setTimeout(timeCheck, 1000);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(config.token);