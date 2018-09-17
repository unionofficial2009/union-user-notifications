const Discord = require("discord.js");
const bot = new Discord.Client();


let userStatus = [];
bot.on("presenceUpdate", (oldMember, newMember) => {
    let username = newMember.user.username;
    let status = newMember.user.presence.status;
  
    userStatus.push(username, status);
    //console.log(`${newMember.user.username} is now ${newMember.user.presence.status}`);
    guildChannels.find('name', 'general')
        .send(`${newMember.user.username} is now ${newMember.user.presence.status}`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
})




bot.login(process.env.BOT_TOKEN);
