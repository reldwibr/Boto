const Discord = require('discord.js');
const Ytdl = require('ytdl-core');
const token = 'NjMzODI2NTI0NDQ1MDE2MDc0.XcbHEw.coNFmmWim9vREwu86FXirB7OKM8';
verdadedementira = false;
const app = new Discord.Client();

app.on('ready', ()=>{
    console.log('Im Innnnnn!!!!');
});

app.on('message', (msg) => {
    if (msg.content === '!cola'){
        if (msg.member.voiceChannel){
            msg.member.voiceChannel.join();
            verdadedementira = true;
        }
        else{
            msg.channel.send("Entra nun canal Otario!!");
        }
    }
    else if (msg.content === '!sai'){
        if (msg.member.voiceChannel){
            msg.member.voiceChannel.leave();
            verdadedementira = false;
        }
        else{
            msg.channel.send('Cê nem ta nun canal maano!!!');
        }
    }
    else if (msg.content.startsWith('!toca ')){
        if (verdadedementira){
            let soltaoSom = msg.content.replace('!toca ','');
            if(Ytdl.validateURL(soltaoSom)){
                msg.channel.send('Soltaaa o Soom DJeeeeyy!!!');
                msg.member.voiceChannel.connection.playStream(Ytdl(soltaoSom));
                console.log(soltaoSom);
            } else {
                msg.channel.send('O link ta bugadoo manuu!!!!');
            }
        }
    }
})

app.login(token);