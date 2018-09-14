const Discord = require('discord.js');
const client = new Discord.Client();

var date = new Date();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  async function timeCheck() {
    var hour = date.getHours();
    if (hour === 3) {
      console.log("It is midnight, appointing new DingDong of the Day");
      var guild = client.guilds.get("471689270399336448");
        var dingDongRole = guild.roles.get("484838319117565952");
        var dingDongMember = guild.roles.get("484838319117565952").members;
        dingDongMember.forEach(member => {
        member.removeRole("484838319117565952");
        });       
        var newDingDong = guild.members.random();
        await newDingDong.addRole("484838319117565952");
        console.log(newDingDong);
                           
      setTimeout(timeCheck, 10000);
    } else {
      console.log("It is not midnight");
      setTimeout(timeCheck, 10000);
    }
  } setTimeout(timeCheck, 1000);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDg5NTI3MDU5NTI2NDUxMjIw.DnyX6g.Zd0TwdY6DMGZg6SyuqdE3anhenE');