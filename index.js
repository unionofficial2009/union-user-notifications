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
        .addField("Instructions", "Please proceed to <#431181931477204992> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#431181931477204992> channel to access the channels for specific game.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
   newMember.send(botembed);
  } else if(newaddedrole=="RO - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#489764277071380490> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#489764277071380490> channel to access the channels for **Ragnarok**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @RO - Leader @RO - Deputy @RO - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);
    
 } else if(newaddedrole=="UNION Community"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#628829844418985994> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#628829844418985994> channel to access the channels for **UNION Community**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);   
    
 } else if(newaddedrole=="LM - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#532167082347855882> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#532167082347855882> channel to access the channels for **Laplace M**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @LM - Leader @LM - Deputy @LM - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);   
   
  } else if(newaddedrole=="LS - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#498078972932784138> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#498078972932784138> channel to access the channels for **Laplace M**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @UNION Resident @LS - Leader @LS - Deputy @LS - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);  
    
 } else if(newaddedrole=="Mabinogi - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#631142968224645154> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#631142968224645154> channel to access the channels for **Mabinogi Fantasy Life**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @Mabinogi - Leader @Mabinogi - Deputy @Mabinogi - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);    
    
 } else if(newaddedrole=="GC - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#453256128206340096> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#453256128206340096> channel to access the channels for **Grand Chase**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @GC - Leader @GC - Deputy @GC - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
   
   } else if(newaddedrole=="DN - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#431819678235492364> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#431819678235492364> channel to access the channels for **Dragon Nest**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @DN - Leader @DN - Deputy @DN - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);
   
   } else if(newaddedrole=="AK - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#431320651354210304> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#431320651354210304> channel to access the channels for **Aura Kingdom**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @AK - Leader @AK - Deputy @AK - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
  
   } else if(newaddedrole=="TM - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#494872674036613120> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#494872674036613120> channel to access the channels for **Talion**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @TM - Leader @TM - Deputy @TM - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);   
     
  } else if(newaddedrole=="CK - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#498877377883930637> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#498877377883930637> channel to access the channels for **Crown Four Kingdoms**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @CK - Leader @CK - Deputy @CK - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed);   
      
  } else if(newaddedrole=="RO - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#489778551487332352> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@RO - Leader @RO - Deputy  @RO - Elite @UNION Officers @UNION Human Resources** in the <#489778551487332352>.")
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
  
  } else if(newaddedrole=="SD - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#628829844418985994> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#628829844418985994> channel to access the channels for **UNION Community**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
   
} else if(newaddedrole=="LS - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#498095783392837632> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@LS - Leader @LS - Deputy  @LS - Elite @UNION Officers @UNION Human Resources @UNION Resident** in the <#498095783392837632>.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @UNION Resident @LS - Leader @LS - Deputy  @LS - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'ls-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Lumia Saga Visiting Area** :tada::hugging: ! <@&498086990705852472> <@&498087805155803137> <@&498089032031404032> <@&431159737162399754> <@&469013270557360129> <@&613595232486817792>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)    
    
  } else if(newaddedrole=="LM - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#532174960211263498> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@LM - Leader @LM - Deputy  @LM - Elite @UNION Officers @UNION Human Resources** in the <#532174960211263498>.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @LM - Leader @LM - Deputy  @LM - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'lm-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Laplace M Visiting Area** :tada::hugging: ! <@&532171866832371713> <@&532171016600944640> <@&532170233507741717> <@&431159737162399754> <@&469013270557360129>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)  
    
  } else if(newaddedrole=="Mabinogi - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#498094166857744401> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@UNION Officers @UNION Human Resources** in the <#498094166857744401>.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @Mabinogi - Leader @Mabinogi - Deputy @Mabinogi - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'mabinogi-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Mabinogi Visiting Area** :tada::hugging: ! <@&498082738453217281> <@&498083384090951680> <@&498084035017310208> <@&431159737162399754> <@&469013270557360129>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)  
    
    
  } else if(newaddedrole=="GC - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#498874771480510484> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@GC - Leader @GC - Deputy @GC - Elite @UNION Officers @UNION Human Resources** in the <#498874771480510484>.")
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
        .addField("Instructions", "Please proceed to <#432408514418442240> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@DN - Leader @DN - Deputy @DN - Elite @UNION Officers @UNION Human Resources** in the <#432408514418442240>.")
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
        .addField("Instructions", "Please proceed to <#432408432411279370> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@AK - Leader @AK - Deputy @AK - Elite @UNION Officers @UNION Human Resources** in the <#432408432411279370>.")
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
        .addField("Instructions", "Please proceed to <#494888742071566337> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@TM - Leader @TM - Deputy @TM - Elite @UNION Officers @UNION Human Resources** in the <#494888742071566337>.")
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
    
  } else if(newaddedrole=="CK - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#498891642195935232> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@CK - Leader @CK - Deputy @CK - Elite @UNION Officers @UNION Human Resources** in the <#498891642195935232>.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @CK - Leader @CK - Deputy @CK - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'ck-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Crown Four Kingdoms Visiting Area** :tada::hugging: ! <@&498884131690905600> <@&498886609115152385> <@&498887656613216256> <@&431159737162399754> <@&469013270557360129>`)
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
     .send(`<@${newMember.user.id}> put your IGN here :arrow_right: <#489805130422681610>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    guildChannels.find('name', 'ro-headquarters')
     .send(`<@${newMember.user.id}> put your selfie here :arrow_right: <#510330472119926785>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
 
    guildChannels.find('name', 'ro-headquarters')
     .send(`<@${newMember.user.id}> Discord Attendance is a must, type **&present** here :arrow_right: <#489790732681347073> once a day`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
 
  } else if(newaddedrole=="Mabinogi - Member"){
    
    
     let guildChannels = newMember.guild.channels;
    
     guildChannels.find('name', 'mabinogi-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Mabinogi Headquarters** :tada::hugging: ! <@&498085236865761280> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
     guildChannels.find('name', 'mabinogi-headquarters')
     .send(`<@${newMember.user.id}> put your IGN here :arrow_right: <#498099198856658944>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)

    guildChannels.find('name', 'mabinogi-headquarters')
     .send(`<@${newMember.user.id}> Discord Attendance is a must, type **%present** here :arrow_right: <#498097560242749440> once a day`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)    
    
  } else if(newaddedrole=="LM - Member"){
    
    
     let guildChannels = newMember.guild.channels;
    
     guildChannels.find('name', 'lm-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Laplace M Headquarters** :tada::hugging: ! <@&532169564713254922> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
     guildChannels.find('name', 'lm-headquarters')
     .send(`<@${newMember.user.id}> put your IGN here :arrow_right: <#532178108250456064>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    guildChannels.find('name', 'lm-headquarters')
     .send(`<@${newMember.user.id}> put your selfie here :arrow_right: <#546665178079690752>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    guildChannels.find('name', 'lm-headquarters')
     .send(`<@${newMember.user.id}> Discord Attendance is a must, type ***present** here :arrow_right: <#532176620526632960> once a day`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    } else if(newaddedrole=="LS - Member"){
    
    
     let guildChannels = newMember.guild.channels;
    
     guildChannels.find('name', 'ls-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Lumia Saga Headquarters** :tada::hugging: ! <@&498089922419490816> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
     guildChannels.find('name', 'ls-headquarters')
     .send(`<@${newMember.user.id}> put your IGN here :arrow_right: <#498113047748149258>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    guildChannels.find('name', 'ls-headquarters')
     .send(`<@${newMember.user.id}> Discord Attendance is a must, type **!present** here :arrow_right: <#498106235485421578> once a day`)
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
    
  } else if(newaddedrole=="UNION Community"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'union-community-hq')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Community Headquarters** :tada::hugging: ! <@&628829844418985994> `)
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
    
  } else if(newaddedrole=="CK - Member"){
    
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'ck-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Crown Four Kingdoms** :tada::hugging: ! <@&498889012598013952> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
      guildChannels.find('name', 'ck-headquarters')
     .send(`<@${newMember.user.id}> put your IGN here -> <#498905695308087306>`)
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
