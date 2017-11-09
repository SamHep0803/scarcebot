const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready to make videos!');
  client.user.setGame("making videos.");
});

client.on('ready', () => {
  if (message.content === 's.makeavideo') {
    message.channel.send('Hey whatsup guys, scarce here.');
  };
});

client.login('Mzc4MTYwMjU2NTM2MDE4OTQ0.DOXcvA.SR2K66NI9pKNknG9xuDjzkTM5yI');
