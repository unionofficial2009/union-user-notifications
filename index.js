const Discord = require("discord.js");
const bot = new Discord.Client();

var moment = require('moment-timezone');


let userStatus = [];
bot.on("presenceUpdate", (oldMember, newMember) => {
    let username = newMember.user.username;
    let status = newMember.user.presence.status;
    // get a reference to all channels in the user's guild
    let guildChannels = newMember.guild.channels;
    
    var currentTime = Date.now();

    var newcurrentTime = moment(currentTime).tz('Asia/Manila').format("MMMM Do YYYY, h:mm:ss a");
    
    if(oldMember.presence.status == newMember.presence.status && newMember.presence.status == "offline"){
        
        userStatus.push(username, status);
        guildChannels.find('name', 'user-status')
        .send(`<@${newMember.user.id}> is now ${newMember.user.presence.status} (invisible)`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
   
    } else {
  
    userStatus.push(username, status);
    guildChannels.find('name', 'user-status')
        .send(`<@${newMember.user.id}> is now ${newMember.user.presence.status}`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
        
    }
})




bot.login(process.env.BOT_TOKEN);
