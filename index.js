const Discord = require("discord.js");
const bot = new Discord.Client();


bot.on('guildMemberAdd', member => {
   let bicon2 = bot.user.displayAvatarURL;  
   let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION")
        .addField("instructions", "Please proceed to #welcome and kindly read and follow the Rules and instruction below")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
   member.send("Welcome to the server!");
});
  


bot.login(process.env.BOT_TOKEN);
