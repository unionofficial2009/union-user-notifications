const Discord = require("discord.js");
const bot = new Discord.Client();


let userStatus = [];
bot.on("presenceUpdate", (oldMember, newMember) => {
    let username = newMember.user.username;
    let status = newMember.user.presence.status;
    // get a reference to all channels in the user's guild
    let guildChannels = newMember.guild.channels;
    
    
  let bicon = newMember.user.displayAvatarURL;
  let bicon2 = bot.user.displayAvatarURL;  
  
    
    
    if(oldMember.presence.status == newMember.presence.status && newMember.presence.status == "offline"){
        
       
        
        let botembed = new Discord.RichEmbed()
        .setDescription(`<@${newMember.user.id}>`)
        .addField("Username", `${newMember.user.username}`)
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Status", `${newMember.user.presence.status} (invisible)`)
        .setTimestamp()
        .setFooter("UNION User Status",bicon2);
        
        userStatus.push(username, status);
        guildChannels.find('name', 'user-status')
        .send(botembed)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
   
    } else {
  
    let botembed = new Discord.RichEmbed()
    .setDescription(`<@${newMember.user.id}>`)
    .addField("Username", `${newMember.user.username}`)
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Status", `${newMember.user.presence.status}`)
    .setTimestamp()
    .setFooter("UNION User Status",bicon2);    
        
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
