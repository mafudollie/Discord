const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1203398104716673076')
    .setType('playing')
    .setURL('https://www.youtube.com/live/vsmEjs5eyb0?si=L7CTz5OjXwf4BqjQ') //Must be a youtube video link 
    .setState('♡')
    .setName('᧔⠀♡⠀᧓')
    .setDetails(`੭୧ ㅤׂ  𓈒⠀⠀✧ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://64.media.tumblr.com/5f89a1737d43d98e0921b1b22b444f64/914f12612fb95f07-74/s400x600/22fd83c003518e4b3056f8bfe75cb331fce52a26.pnj') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('(𓏼´Д`)') //Text when you hover the Large image
    .setAssetsSmallImage('https://64.media.tumblr.com/cadd443541d0a2f6fe6768033a3381c2/914f12612fb95f07-48/s250x400/1441fa03e6046ce7cbb3007da4bb8edeb1857152.pnj') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('promise') //Text when you hover the Small image
    .addButton('ೀ', 'https://rentry.co/mizubear')
    .addButton('𝜚۪ ﾟ', 'https://en.pronouns.page/@mafudollie');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
