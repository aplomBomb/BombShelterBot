const Discord = require('discord.js');
const config = require('config.json');
const client = new Discord.Client();
const fs = require("fs");


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    function timeCheck() {
      var date = new Date();
      var hour = date.getHours();
      if (hour === 16) {
      console.log("It is 8am, appointing new DingDong of the Day");

      var guild = client.guilds.get(config.guildID);
      var dingDongMember = guild.roles.get(config.dingDongRole).members;

      
      dingDongMember.forEach(member => {       
        member.removeRole(config.dingDongRole).then(setTimeout(helloDingDong, 1000)).catch(console.error);    
      });
      
       
   async function helloDingDong() {
    let newDingDong = guild.members.random(); //pick a random server member
    let dingDongString = JSON.stringify(newDingDong); //convert that member array to json string
    let dingDongObject = JSON.parse(dingDongString); //convert member string to object
    let blackListString = await fs.readFileSync("./blackList.json"); //read contents of 'blackList.json'
    console.log(blackListString);
  
      if (blackListString.includes(dingDongString)) {  //check if member is found in the blackList array, if true, restart function after 250ms
        console.log("Selected member present in blacklist, picking new random member");
        setTimeout(helloDingDong, 3000);
      } else
        newDingDong.addRole(config.dingDongRole).then(console.log(newDingDong)).catch(console.error); //assign new member the ddotd role
        let blackListLatest = blackListString + dingDongString; //add new member stringed entry to blackList
        var dingDongChannel = guild.channels.get(config.speechChannel).send("**Congratulations**" + newDingDong + "**! You're DingDong of the Day! SPEECH! SPEECH! SPEECH!**").then(msg => {
          msg.delete(86400000)
        }).catch(console.log("Message sent to dingdong-speeches channel"));
        fs.writeFile("./blackList.json", blackListLatest, function (error, data) { //write updated blackList to file
          console.log("BlackList updated");
        });
  };

                                   
      setTimeout(timeCheck, 86400000);
    } else {
      console.log("It is not 8am");
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