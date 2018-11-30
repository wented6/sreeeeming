const Discord = require("discord.js");
const client = new Discord.Client();






client1.on('ready', () => {
    client.user.setGame(`Universe server.`,'https://www.twitch.tv/f9u9l1i')
    
});


client2.on('ready', () => {
    client.user.setGame(`Universe server.`,'https://www.twitch.tv/f9u9l1i')
    
});












client1.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN);
