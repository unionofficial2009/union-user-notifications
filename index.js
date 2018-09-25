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


bot.on('guildMemberUpdate', (oldMember, newMember) => {
  
  let newroles = newMember.roles;
  let oldroles = oldMember.roles;
  
  



  //let difference = newroles.filter(x => x.name !oldroles.includes(x));
  
  //let verifiedRole = difference.find("name", "Verified").size;
  
  //if(verifiedRole == 1){
   // newMember.send(`test`); 
  //} 
  
});  

  
bot.on("message", async message => {
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args =  messageArray.slice(1); 
   
  
 if(cmd === `${prefix}help`){

   let ucommands = new Discord.RichEmbed()
   .setDescription("COMMAND LIST")
   .addField("1. Random Useless Facts", "**<uselessfact**")
   .addField("2. Random Cat Facts", "**<catfact**")
   .addField("3. Random Chuck Norris Jokes", "**<chucknorris**")
   .addField("4. Random Trivia", "**<trivia**")
   .addField("4. Command List", "**<help**")
   .setColor("#ff9900");
   
   message.delete().catch(O_o=>{});
   message.channel.send(ucommands);
   
 }  
   
  if(cmd === `${prefix}uselessfact`){
 
    let {body} = await superagent
    .get(`http://randomuselessfact.appspot.com/random.json?language=en`);
     
    let jokembed = new Discord.RichEmbed()
    .setDescription(body.text)
    .setColor("#ff9900");
     
    message.delete().catch(O_o=>{});
    message.channel.send(jokembed);
   
     
  }  
  
  if(cmd === `${prefix}catfact`){

    let {body} = await superagent
    .get(`https://catfact.ninja/fact`);
     
    let jokembed = new Discord.RichEmbed()
    .setDescription(body.fact)
    .setColor("#ff9900");
     
    message.delete().catch(O_o=>{});
    message.channel.send(jokembed);
   
     
  } 
  
  if(cmd === `${prefix}chucknorris`){

    let {body} = await superagent
    .get(`https://api.chucknorris.io/jokes/random`);
     
    let jokembed = new Discord.RichEmbed()
    .setDescription(body.value)
    .setColor("#ff9900");
     
    message.delete().catch(O_o=>{});
    message.channel.send(jokembed);
    
  } 
  
  if(cmd === `${prefix}trivia`){

    let {body} = await superagent
    .get(`http://numbersapi.com/random/trivia?json`);
     
    let jokembed = new Discord.RichEmbed()
    .setDescription(body.text)
    .setColor("#ff9900");
     
    message.delete().catch(O_o=>{});
    message.channel.send(jokembed);
    
  } 
  
 
   
});   



bot.login(process.env.BOT_TOKEN);
