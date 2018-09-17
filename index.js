const Discord = require("discord.js");
const bot = new Discord.Client();


let userStatus = [];
bot.on("presenceUpdate", (oldMember, newMember) => {
    let username = newMember.user.username;
    let status = newMember.user.presence.status;
    // get a reference to all channels in the user's guild
    let guildChannels = newMember.guild.channels;
  
    userStatus.push(username, status);
    guildChannels.find('name', 'user-status')
        .send(`<@${newMember.user.id}> is now ${newMember.user.presence.status}`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
})




bot.login(process.env.BOT_TOKEN);
