const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.login(token);


client.on('ready', () => {
    console.log('Welcome me into this nasty World');
})
client.on('guildMemberAdd', member => {
  const embed = {
    "title": "Welcome To Committee Of Noobs",
    "description": "Hello Peeps, Welcome to the CON server!",
    "color": 831018,
    "thumbnail": {
      "url": "https://i.imgur.com/mGJVLXz.png"
    },
    "image": {
      "url": "https://i.imgur.com/Ckzaw3t.png"
    },
    "fields": [
      {
        "name": "💣",
        "value": " For diving into the different games you love in the channel, Get your Roles by Going to <#716551185431265331>."
      },
      {
        "name": "🎮",
        "value": "New to Discord ?, check out <#717339670974824519> to see how its done. Feel free to ping any of the admins for any kind of stuff."
      },
      {
        "name": "🤖",
        "value": "Join a voice channel, listen to",
        "inline": true
      },
      {
        "name": "💪",
        "value": "music and ofc Go Pwn Some Noobs!",
        "inline": true
      }
    ]
  };
 member.send({embed});
},
client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "👥people-incoming");
    if(!channel) return;


    channel.send(`Hey ${member}, welcome to CON! :tada::hugging: ! Head over to <#716551185431265331>  to assign yourself roles and get into the channels :D Good luck, Have fun`)
}));

client.on('message', message =>{
 
    }
)
