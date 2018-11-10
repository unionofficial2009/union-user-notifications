const Discord = require("discord.js");
const bot = new Discord.Client();
const botconfig = require("./botconfig.json");
const superagent = require("superagent");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("type <help for list of commands", {type: "WATCHING"});
});

//bot.on('guildMemberAdd', member => {
//   let bicon2 = bot.user.displayAvatarURL;  
//   let botembed = new Discord.RichEmbed()
//        .setDescription("Hello maam/sir welcome to UNION.")
//        .addField("Instructions", "Please proceed to **#welcome** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the rules/instructions in the **#welcome** channel to access the channels for specific game.")
//        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources**.")
//        .setColor("#15f153")
//        .setTimestamp()
//        .setFooter("UNION User Notifications",bicon2);
//   
//   member.send(botembed);
//});


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
  
   } else if(newaddedrole=="TM - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#talion** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the **#talion** channel to access the channels for **Talion**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @TM - Leader @TM - Deputy @TM - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);   
     
  } else if(newaddedrole=="RF - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#rage_fighters** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the **#rage_fighters** channel to access the channels for **Rage Fighters**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @RF - Leader @RF - Deputy @RF - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);   
      
  } else if(newaddedrole=="RO - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#ro-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@RO - Leader @RO - Deputy  @RO - Elite @UNION Officers @UNION Human Resources** in the **#ro-visiting-area**.")
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
        .addField("Instructions", "Please proceed to **#gc-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@GC - Leader @GC - Deputy @GC - Elite @UNION Officers @UNION Human Resources** in the **#ro-visiting-area**.")
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
        .addField("Instructions", "Please proceed to **#dn-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@DN - Leader @DN - Deputy @DN - Elite @UNION Officers @UNION Human Resources** in the **#dn-visiting-area**.")
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
        .addField("Instructions", "Please proceed to **#ak-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@AK - Leader @AK - Deputy @AK - Elite @UNION Officers @UNION Human Resources** in the **#ak-visiting-area**.")
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
    
  } else if(newaddedrole=="TM - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#tm-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@TM - Leader @TM - Deputy @TM - Elite @UNION Officers @UNION Human Resources** in the **#tm-visiting-area**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @TM - Leader @TM - Deputy @TM - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'tm-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Talion Visiting Area** :tada::hugging: ! <@&494874681258672129> <@&494881022224105493> <@&494883668498579466> <@&431159737162399754> <@&469013270557360129>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)  
    
  } else if(newaddedrole=="RF - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to **#rf-visiting-area** channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@RF - Leader @RF - Deputy @RF - Elite @UNION Officers @UNION Human Resources** in the **#rf-visiting-area**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @RF - Leader @RF - Deputy @RF - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'rf-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Rage Fighters Visiting Area** :tada::hugging: ! <@&498884131690905600> <@&498886609115152385> <@&498887656613216256> <@&431159737162399754> <@&469013270557360129>`)
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
    
     guildChannels.find('name', 'ro-headquarters')
     .send(`<@${newMember.user.id}> pu your IGN here -> <#489805130422681610>`)
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
    
  } else if(newaddedrole=="DN - Member"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'dn-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Dragon Nest Headquarters** :tada::hugging: ! <@&431159847866597398> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
  } else if(newaddedrole=="GC - Member"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'gc-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Grand Chase Headquarters** :tada::hugging: ! <@&453253510058868736> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
     
    
  } else if(newaddedrole=="TM - Member"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'tm-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Talion Headquarters** :tada::hugging: ! <@&494884671637946368> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
  } else if(newaddedrole=="RF - Member"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'rf-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Rage Fighters Headquarters** :tada::hugging: ! <@&498889012598013952> `)
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
   .addField("1. Command List", "**<help**")
   .setColor("#ff9900");
   
   message.delete().catch(O_o=>{});
   message.channel.send(ucommands);
   
 }  
   
  
  
  
 
   
});   



bot.login(process.env.BOT_TOKEN);
