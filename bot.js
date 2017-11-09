const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready to make videos!');
  client.user.setGame("making videos.");
});

client.login('MzU4NTM4Mjg3Njc5Mjc1MDEw.DONnmg.ZPuMj0Kx5VR3v3bVpz0ouTlLVB8');


client.on('message', message => {
  if (message.content === 's.hey guys') {
    message.channel.send('Hey Whats Up Guys its SCARCE here!!');
  };
});
