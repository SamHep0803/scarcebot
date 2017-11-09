const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready to make videos!');
  client.user.setGame("making videos.");
});

client.on('message', message => {
  if (message.content === 's.makeavideo') {
    message.channel.send('Sorry, there is no news :(');
  };
});

client.on('message', message => {
  if (message.content === 's.hey guys') {
    message.channel.send('Hey Whats Up Guys its SCARCE here!!');
  };
});

client.login('Mzc4MTYwMjU2NTM2MDE4OTQ0.DOXcvA.SR2K66NI9pKNknG9xuDjzkTM5yI');
