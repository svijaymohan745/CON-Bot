const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzIwMzcxNjcxMjQ4MjczNTE4.XuHqyg.oJEgPR0Hy8HY34EnlOIg_F4rhOA';

client.login(token);

client.on('ready', () => {
    console.log('Welcome me into this nasty World');
    let myGuild = client.guilds.cache.get('424978571757617162');
    let memberCount =  myGuild.memberCount;
    let MemberCountChannel = myGuild.channels.cache.get('720391531697012848');
    MemberCountChannel.setName('Members:' + memberCount)
 })
 
 client.on('guildMemberAdd', member=>{

    const channel = member.guild.cache.channels.find(channel => channel.name === "👥people-incoming")
    if(!channel) return;

    channel.send('Hey ($member), welcome to CON! :tada::hugging: ! Head over to #🙏welcome  to assign yourself roles and get into the channels :D Good luck, Have fun')
 ;
 client.on('message'), message=>{
     let args = message.content.substring(PREFIX.length).split("");
     switch(args[0]){
         case 'play':

         break;
     }
    
       let myGuild = client.guilds.cache.get('424978571757617162');
 
 
    let memberCount =  myGuild.memberCount;
    let MemberCountChannel = myGuild.channels.cache.get('720391531697012848');
    MemberCountChannel.setName('Members: ' + memberCount)
 }
 
 client.on('guildMemberRemove', member =>{
  let myGuild = client.guilds.cache.get('424978571757617162');
    let memberCount =  myGuild.memberCount;
    let MemberCountChannel = myGuild.channels.cache.get('720391531697012848');
    MemberCountChannel.setName('Members: ' + memberCount)
 ))

 }
