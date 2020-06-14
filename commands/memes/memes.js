
const Discord = require('discord.js');
const client = new Discord.Client();
const { RichEmbed } = require("discord.js");

  
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