const Discord = require('discord.js');

const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

bot.on("ready", () =>{
    console.log(`logged in as${bot.user.tag}!`)
  });

bot.login('OTEwNTQ0NTI0ODQ4Mjc5NTgy.YZUYqw._4EUJQAS6TJTA6GAAVtC6-KMZu4');