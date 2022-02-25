const express = require('express');
const app = express();
const sharp = require("sharp");
const port = 3000;
var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});

app.get('/', function(request, response) {   
    response.send('hello world!');
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================Я ЗАХВАЧУ ВАШ МИР И НИКТО МЕНЯ НЕ ОСТАНОВИТ!
const Discord = require('discord.js');
const client = new Discord.Client();

const { createCanvas, loadImage ,  registerFont} = require('canvas');
const canvas = createCanvas(128, 128)
const ctx = canvas.getContext('2d')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
// const libvips  = require('libvips')

let fileTime = fs.readFileSync('./lastHour')
const fileDate = fs.readFileSync('./lastDate')


    var interval = setInterval (function () {

        const guild = client.guilds.cache.get("544902879534907392");


let CurrentDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"}));

let Hour = CurrentDate.getHours()

if (Hour < 12)
{
  path = './images/AdvancedIcons/' + Hour + 'am.gif'
}else{
  path = './images/AdvancedIcons/' + (Number(Hour)-12).toString() + 'pm.gif'
}

if (Hour == 0)
{
  path = './images/AdvancedIcons/' + 12 + 'am.gif'
}

console.log(path)

  let channel = guild.channels.cache.get("930193336042655805");



if (fileTime != Hour)
{
  guild.setIcon(path)
  console.log('ОБНОВКА ИКОНКИ ОАОАООА')
function getNumberOfDays(start, end) {
    const date1 = CurrentDate
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.floor(diffInTime / oneDay);

    return diffInDays;
}

let array = getNumberOfDays(CurrentDate, "6/1/2022").toString().split("")
let lastNum = array[array.length-1]

let word = 'день'

if (lastNum == 1) { word = 'день' }
if (lastNum == 2) { word = 'дня' }
if (lastNum == 3) { word = 'дня' }
if (lastNum == 4) { word = 'дня' }
if (lastNum == 5) { word = 'дней' }
if (lastNum == 6) { word = 'дней' }
if (lastNum == 7) { word = 'дней' }
if (lastNum == 8) { word = 'дней' }
if (lastNum == 9) { word = 'дней' }
if (lastNum == 0) { word = 'дней' }

if (getNumberOfDays(CurrentDate, "6/1/2022") == 11) { word = 'дней'}
if (getNumberOfDays(CurrentDate, "6/1/2022") == 12) { word = 'дней'}
if (getNumberOfDays(CurrentDate, "6/1/2022") == 13) { word = 'дней'}
if (getNumberOfDays(CurrentDate, "6/1/2022") == 14) { word = 'дней'}

channel.setName('🏝До лета ' + getNumberOfDays(CurrentDate, "6/1/2022") + ' ' + word + '🏝')
}




fileTime = Hour


let FullDirection = []



    }, 30000);  //900000 - интервал в милисекундах между проверками (900 000 = 15 минут)
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('понг!');
        msg.channel.send(new Date().getTime() - msg.createdTimestamp + "мс")

  }
});

client.on('message', msg => {
  if (msg.content === 'циалм') {
    msg.reply('ЧО ТЕБЕ НАДО ОТ МЕНЯ?!? Я УЖЕ ЦЕЛЕСТИАЛ!');

  }
});


// client.on('message', msg => {
//   if (cli) {
//     msg.reply('ЧО ТЕБЕ НАДО ОТ МЕНЯ?!? Я УЖЕ ЦЕЛЕСТИАЛ!');

//   }
// });

client.on('message', msg => {
  if (msg.content === '<@775337700428742707>') {
    msg.reply('ИДИ ТЫ ЙА МИР ЗОХВОЧЮ ЗАФТРА!!');

  }
});


client.on('message', msg => {
  if (msg.content === 'test') {

        var array = [];
    try{
    let channels = msg.guild.channels.cache.array();
    for (const channel of channels) 
    {
        array.push(channel);
        console.log(channel);
        // if (channel.isText == true) {
        // channel.send('Hello here!')
        // }

        // client.channels.cache.get(channel.id)
    }}catch(err){
              console.log(err)
        console.log('array error')
        message.channel.send('An error occoured while getting the channels.')

    }
let i = 1
while (i<500) {
  let neededchan = array[i];
  if (neededchan.isText == true)
  {
neededchan.send('xui');
i = i + 1;
  }
}


}});

client.on('message', function(message) {
    if (message.content === "$loop") { 
        if (!message.member.hasPermission("ADMINISTRATOR")) return
        var interval = setInterval (function () {
            message.channel.send("Я - МЕСТНЫЙ БОГ! КТО НЕ БУДЕТ ПОКЛАНЯТЬСЯ МНЕ - ПОПЛАТИТСЯ ЗА ЭТО!!!!\nhttps://media.discordapp.net/attachments/698853696817070164/841334502957252608/1529176231_482695013df1de383549e64d538db9e0.jpg", 1*1000)
            .catch(console.error); // add error handling here
        }, 100); 
    }
          if (message.content === "$loop3") { 
        if (!message.member.hasPermission("ADMINISTRATOR")) return
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("Пиздец блять, лжебогу верят! Я - истинный бог, а вы, отбросы, поклоняетесь какому то самозванцу!", 1*100)
            .catch(console.error); // add error handling here
        }, 10000); 
    }
  
});

client.on("ready", () => { 

  console.log('тип рабет')


client.user.setPresence({ status: "idle" });
client.user.setActivity('хентай :P', { type: 'WATCHING' });



client.user.setStatus('idle')
  console.log('тип рабет 2')

client.user.setPresence({ activity: { name: 'Ронополдо :)'}, status: 'dnd', type: 'PLAYING' })
  .then(console.log)
  .catch(console.error);
  console.log('тип рабет 2')

  
});

// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 


//Реакшн на ники сделать вообще круто было бы)0000000)0
client.login(process.env.DISCORD_TOKEN);