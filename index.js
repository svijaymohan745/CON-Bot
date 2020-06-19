const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");
const fs = require("fs");
bot.commands = new Discord.Collection();
let xp = require("./xp.json");
let purple = botconfig.purple;
let coins = require("./coins.json")
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



bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("<:CONcoin:719543153107009558>", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {
    msg.delete({ timeout: 10000 })
  })
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.MessageEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup)
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let prefix = prefixes[message.guild.id].prefixes;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

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
                  "name": "**Coins - Check the number of Coins You have**",
                  "value": "_coins"
                },
                {
                  "name": "**Levels - Check your Server Level**",
                  "value": "_level"
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
bot.on('guildMemberAdd', member => {
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
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "👥people-incoming");
    if(!channel) return;


    channel.send(`Hey ${member}, welcome to CON! :tada::hugging: ! Head over to <#716551185431265331>  to assign yourself roles and get into the channels :D Good luck, Have fun`)
}));

bot.on('message', message =>{
 
    }
)
