const { Client, Attachment } = require('discord.js');
const token = 'NjMzODI2NTI0NDQ1MDE2MDc0.Xa3Fmg.6gm1gORatuEFfsIEY3hmNHCVJDo';
const client = new Client();
const Ytdl = require('ytdl-core');
let estouPronto = false;


client.on('ready', () => {
  console.log('Im Innnnn!!!!!');
});

client.on('message', msg => {
    if (msg.content === "!lul"){
        msg.channel.send("Jeeováá!!!!");
    }

    if (msg.content === "!oi"){
        msg.channel.send(`Oi Mr.${msg.author.username}`);
    }

    if (msg.content === '!rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        msg.channel.send(`${msg.author},`, attachment);
    }
    if (msg.content === '!cola'){
        if (msg.member.voiceChannel){
            msg.member.voiceChannel.join();
            estouPronto = true;
        }
        else{
            msg.channel.send("Entra nun Canal Otario!!");
        }
    }
    else if (msg.content === '!sai'){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.leave();
            msg.channel.send('No deiche!! Zuum!!')
            estouPronto = false;
        }
        else {
            msg.channel.send("Cê nem ta nun canal mano!!");
        }
    }
    else if(msg.content.startsWith('!toca ')){
        if(estouPronto){
            let soltaoSom = msg.content.replace('!toca ','');
            if(Ytdl.validateURL(soltaoSom)){
                msg.channel.send("Solta o Somm DJeeyy!!!!");
                msg.member.voiceChannel.connection.playStream(Ytdl(soltaoSom));
                console.log(soltaoSom);
            } else {
                msg.channel.send("O link ta bugadooo!!!");
            }

        }

    }
/*    if (msg.content === '!dejavu'){
        const attachment = new Attachment('https://youtu.be/Z0oyGH7P3Uo');
        msg.channel.send(`${msg.author},`, attachment);
    }
*/
});

client.login(token);
