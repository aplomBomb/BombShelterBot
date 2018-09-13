var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "NDg5NTI3MDU5NTI2NDUxMjIw.DnsD6Q.V8mfuNcxu5kVX9SVMDJRmPW91TE",
    autorun: true
});

var date = new Date();
var dingDong;

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
    function timeCheck() {
        var constantLoop = 1;
        
        var hour = date.getHours();
        if (hour = 0) {
            console.log("it is midnight");
            let rollID = "484838319117565952";
            let membersWithRole 
            setTimeout(timeCheck, 3600000);
        } else {
            console.log("it is not midnight"); 
            setTimeout(timeCheck, 3600000);              
        }
    } setTimeout(timeCheck, 5000);
} 
);

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});


