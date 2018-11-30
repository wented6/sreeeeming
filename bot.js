const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Diamond Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Ween, ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`مؤخرتكَ مكانَ جيد لوضعْ رآيك فيهاَ.`,"https://www.twitch.tv/xkilleryt")
client.user.setStatus("online")
 
});

client.login(process.env.BOT_TOKEN);
