const Discord = require("discord.js");
const bot = new Discord.Client();
const botconfig = require("./botconfig.json");
const superagent = require("superagent");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("type <help for list of commands", {type: "WATCHING"});
});

bot.on('guildMemberAdd', member => {
   let bicon2 = bot.user.displayAvatarURL;  
   let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#welcome** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the rules/instructions in the **#welcome** channel to access the channels for specific game.")
        .addField("Need Help?", "Any problem, please DM **@UNION President  @UNION Vice President @UNION Officers @UNION Human Resources**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
   member.send(botembed);
});
  
bot.on("message", async message => {

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args =  messageArray.slice(1); 
   
  
 if(cmd === `${prefix}help`){
   
   message.author.send("test");
   
 }  
   
  if(cmd === `${prefix}uselessfact`){
    
    let {body} = await superagent
    .get(`http://randomuselessfact.appspot.com/random.json`);
     
    let jokembed = new Discord.RichEmbed()
    .setDescription(body.text)
    .setColor("#ff9900");
     
    message.delete().catch(O_o=>{});
    message.channel.send("test");
   
     
  }     
   
});   



bot.login(process.env.BOT_TOKEN);
