const Discord = require("discord.js");
const bot = new Discord.Client();


let userStatus = [];
bot.on("presenceUpdate", (oldMember, newMember) => {
    let username = newMember.user.username;
    let status = newMember.user.presence.status;
    // get a reference to all channels in the user's guild
    let guildChannels = newMember.guild.channels;
    
    
  let bicon = newMember.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed();
  let bicon2 = bot.user.displayAvatarURL;
  
  .setDescription(`<@${newMember.user.id}>`)
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Status", `${newMember.user.presence.status}`)
  .setTimestamp()
  .setFooter("Date",bicon2);
    
    
    if(oldMember.presence.status == newMember.presence.status && newMember.presence.status == "offline"){
        
        userStatus.push(username, status);
        guildChannels.find('name', 'user-status')
        .send(botembed)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
   
    } else {
  
    userStatus.push(username, status);
    guildChannels.find('name', 'user-status')
        .send(botembed)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
        
    }
})




bot.login(process.env.BOT_TOKEN);
