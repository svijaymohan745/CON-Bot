const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const token = process.env.token;
const fs = require("fs");
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
const { MessageEmbed  } = require("discord.js");
const randomPuppy = require("random-puppy");

const PREFIX = '_';


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.login(token);

bot.on("guildMemberAdd", guildMember => {
   var guild = guildMember.guild;
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
  if (guild.id == "424978571757617162")
      guildMember.send({embed});
},
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "👥people-incoming");
    if(!channel) return;


    channel.send(`Hey ${member}, welcome to CON! :tada::hugging: ! Head over to <#716551185431265331>  to assign yourself roles and get into the channels :D Good luck, Have fun`)
}));

bot.on('message', message =>{
 
    }
)
bot.on('guildMemberAdd', member =>{
  var guild = member.guild;

  const channel = member.guild.channels.cache.find(channel => channel.name === "general");
  if(!channel) return;

  if (guild.id == "724450171102036099")
  channel.send(`Hey ${member}, welcome to the Group!!! :tada::hugging: ! Head over to <#724575687851114557>  to read the rules and bask on the discussions, memes and spam that we have :D`)
});


bot.on('message', msg=>{
    
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
          
        case 'help':
          msg.channel.send({embed: {
              color: 3447003,
              author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
              },
              "title": "Help Commands",
              "description": "All the Commands that this amazing bot can do <:pog:716321868528877599>",
           
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
                  "name": "**Levels - Check your Server Level**",
                  "value": "_rank"
                },
                {
                  "name": "**Check another guy's rank**",
                  "value": "_rank @username"

                },
                {
                  "name": "**Server Leaderboards**",
                  "value": "_leaderboard"

                },
                {
                  "name": "**Ping Command**",
                  "value": "_ping"

                },
            
                
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


bot.on("message", async message => {
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


bot.on('ready', () => {
  var testChannel = bot.channels.cache.find(channel => channel.id === '716557043628245025');
  console.log('Welcome me into this nasty World');
  bot.user.setActivity('your darkest secrets [_help]', { type: 'LISTENING'}).catch(console.error);

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

