const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready to make videos!');
  client.user.setGame("making videos.");
});

client.login('Mzc4MTYwMjU2NTM2MDE4OTQ0.DOXcvA.SR2K66NI9pKNknG9xuDjzkTM5yI');
