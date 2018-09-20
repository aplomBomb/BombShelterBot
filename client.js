const Discord = require('discord.js');
const config = require('config.json');
const client = new Discord.Client();
const fs = require("fs");


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
      
       
  async function helloDingDong() {
    var newDingDong = guild.members.random();
    try {
      newDingDong.addRole(config.dingDongRole).then(console.log(newDingDong)).catch(console.error);
      try {
        var dingDongChannel = guild.channels.get(config.speechChannel).send("**Congratulations** " + newDingDong + " **! You're DingDong of the Day! SPEECH! SPEECH! SPEECH!**");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
    
    
    
  };

                                   
      setTimeout(timeCheck, 86400000);
    } else {
      try {
        var guild = client.guilds.get(config.guildID);
        var dingDongMember = guild.roles.get(config.dingDongRole).members;
        const blackList = [dingDongMember];
        console.log(blackList);
        const blFile = fs.writeFileSync(__dirname + "/blackList.json", blackList, function (error, data) {
        });
        
      } catch (error) {
        console.log(error);
      }
      
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