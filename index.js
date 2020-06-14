const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const fs = require("fs");
const { Collection } = require("discord.js");
const { MessageEmbed } = require ("discord.js");
const randomPuppy = require("random-puppy");
const { RichEmbed } = require("discord.js");

const PREFIX = '_';


client.login(token);

client.commands = new Collection
client.aliases = new Collection();


client.on('message', msg=>{
    
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
          
        case 'help':
          msg.channel.send({embed: {
              color: 3447003,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              "title": "Help Commands",
              "description": "All the Commands that this amazing bot can do :D",
           
              "fields": [
                {
                  "name": "**Meme Command**",
                  "value": "_meme"
                },
                {
                  "name": "**Help Command(You are looking right at it**)",
                  "value": "_help "
                },
                {
                  "name": "**More Features Comming Soon**",
                  "value": "Stay Tuned"
                }
            
                
              ]
            }
          });
  }
})

module.exports = {
  name: "meme",
  category: "Epic Memes",
  description: "Sends the best memes on the planet",
}


client.on("message", async message => {
if (message.content == "_meme"){
  const subReddits = ["dankmeme", "dankmemes","memes", "meme", "jokes", "joke", "me_irl"];
  const random = subReddits[Math.floor(Math.random() * subReddits.length)];

  const img = await randomPuppy(`${random}`);

  const embed = new MessageEmbed()
  .setColor("RANDOM")
  .setImage(img)
  .setTitle(`From /r/${random}`)
  .setURL(`https://www.reddit.com/r/${random}`);

  message.channel.send(embed)

}})


client.on('ready', () => {
  var testChannel = client.channels.cache.find(channel => channel.id === '716557043628245025');
  console.log('Welcome me into this nasty World');

setInterval(() => {
  testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
}, 604800000);
setInterval(() => {
  testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
}, 691200000);
setInterval(() => {
  testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
}, 777600000);
setInterval(() => {
  testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
}, 864000000);
setInterval(() => {
  testChannel.send("Hey there humans, make sure you spam those contracts till there is none left. <:hi:716321862661177404>");
}, 950400000);
 
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
        "value": " Before diving into the different games you love in the server, get your Roles first by Going to <#716551185431265331>."
      },
      {
        "name": "🎮",
        "value": "New to Discord ?, check out <#717339670974824519> to see how its done. Feel free to ping any of the admins for any kind of stuff."
      },
      {
        "name": "🤖",
        "value": "Join a voice channel, talk about",
        "inline": true
      },
      {
        "name": "💪",
        "value": "memes and ofc Go Pwn Some Noobs!",
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
