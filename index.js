const Discord  = require('discord.js');
const Ytdl = require('ytdl-core');
const { token } = require("./token.js" );
verdadedementira = false;
const app = new Discord.Client();

app.on('ready', ()=>{
    console.log('Im Innnnnn!!!!');
});

app.on('message', (msg) => {
    if (msg.content === '!lul'){
        msg.channel.send("Jeeeovváá!!!");
    }

    if (msg.content === '!oi'){
        msg.channel.send(`Oi Mr.${msg.author.username}`);
    }

    if (msg.content === '!rip') {
        const attachment = new Discord.Attachment('https://i.imgur.com/w3duR07.png');
        msg.channel.send(`${msg.author},`, attachment);
    }

    if (msg.content === '!me') {
        number = 4;
        imageNumber = Math.floor(Math.random() * (number -1 +1)) + 1;
        msg.channel.send({files: ["./images/" + imageNumber + ".png"]});
    }

    if (msg.content === '!dab'){
        attachment = new Discord.Attachment('./images/3.png');
        msg.channel.send(`${msg.author},`, attachment);
    }

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
            msg.channel.send("Deiicheee!! VLw FLws");
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