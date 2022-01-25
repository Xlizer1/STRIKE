import Discord from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

bot.on("ready", () =>{
    console.log(`logged in as${bot.user.tag}!`)
  });

bot.login(process.env.TOKEN);