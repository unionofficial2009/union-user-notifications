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
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
   member.send(botembed);
});


bot.on('guildMemberUpdate', (oldMember, newMember) => {
  
  let newroles = newMember.roles;
  let oldroles = oldMember.roles;
  
  let diffroles = newroles.filter(item => !oldroles.some(other => item.id === other.id));
  
  let newaddedrole = diffroles.map(r=> `${r.name}`);
  
  if(newaddedrole=="Verified"){
     let bicon2 = bot.user.displayAvatarURL;  
     let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#roles** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the **#roles** channel to access the channels for specific game.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
   newMember.send(botembed);
  } else if(newaddedrole=="RO - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#ragnarok** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the **#ragnarok** channel to access the channels for **Ragnarok**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @RO - Leader @RO - Deputy @RO - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);
    
 } else if(newaddedrole=="GC - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#grand_chase** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the **#grand_chase** channel to access the channels for **Grand Chase**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @GC - Leader @GC - Deputy @GC - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
   
   } else if(newaddedrole=="DN - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#dragon_nest** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the **#dragon_nest** channel to access the channels for **Dragon Nest**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @DN - Leader @DN - Deputy @DN - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);
   
   } else if(newaddedrole=="AK - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#aura_kingdom** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the **#aura_kingdom** channel to access the channels for **Aura Kingdom**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @AK - Leader @AK - Deputy @AK - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);   
    
  } else if(newaddedrole=="RO - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#ro-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@RO - Leader @RO - Deputy  @RO - Elite @UNION Officers @UNION Human Resources** in the **#ro-visiting-area** channel.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @RO - Leader @RO - Deputy  @RO - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'ro-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Ragnarok Visiting Area** :tada::hugging: ! <@&489768333479247883> <@&489772251437203456> <@&489775797347942415> <@&431159737162399754> <@&469013270557360129>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    
  } else if(newaddedrole=="GC - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#gc-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@GC - Leader @GC - Deputy @GC - Elite @UNION Officers @UNION Human Resources** in the **#ro-visiting-area** channel.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @GC - Leader @GC - Deputy @GC - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'gc-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Grand Chase Visiting Area** :tada::hugging: ! <@&453252952094670858> <@&453253183855394816> <@&453253398402170880> <@&431159737162399754> <@&469013270557360129>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    
  } else if(newaddedrole=="DN - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#dn-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@DN - Leader @DN - Deputy @DN - Elite @UNION Officers @UNION Human Resources** in the **#dn-visiting-area** channel.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @DN - Leader @DN - Deputy @DN - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'dn-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Dragon Nest Visiting Area** :tada::hugging: ! <@&431855342863908874> <@&432189103962980353> <@&431198294639902730> <@&431159737162399754> <@&469013270557360129>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    
  } else if(newaddedrole=="AK - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#ak-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@AK - Leader @AK - Deputy @AK - Elite @UNION Officers @UNION Human Resources** in the **#ak-visiting-area** channel.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @AK - Leader @AK - Deputy @AK - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'ak-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Aura Kingdom Visiting Area** :tada::hugging: ! <@&431853346664742922> <@&431853307217313792> <@&431159804631973897> <@&431159737162399754> <@&469013270557360129>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    
  } else if(newaddedrole=="RO - Member"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'ro-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Ragnarok Headquarters** :tada::hugging: ! <@&489776631913906199> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
  } else if(newaddedrole=="AK - Member"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'ak-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Aura Kingdom Headquarters** :tada::hugging: ! <@&431159809450967041> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
  }
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
