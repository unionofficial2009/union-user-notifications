const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on('guildMemberAdd', member => {
   let bicon2 = bot.user.displayAvatarURL;  
   let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#welcome** channel on the **UNION HEADQUATERS** discord server. Kindly read and follow the rules/instructions on the **welcome** channel to access the channels for specific game.")
        .addField("Need Help?", "Any problem, please DM **@UNION President  @UNION Vice President @UNION Officers @UNION Human Resources**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
   member.send(botembed);
});
  


bot.login(process.env.BOT_TOKEN);
