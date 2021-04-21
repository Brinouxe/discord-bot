const Discord = require("discord.js");
const ytdl = require("ytdl-core")

const Client = new Discord.Client;

const prefix = "-";

Client.on("ready", () =>{
    Client.user.setStatus("dnd");
    Client.user.setActivity("Besoin d'aide ? Faite -help !", {type: "WATCHING"} );
    console.log("bot connecté avec succès !");
});



Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let rtyu = message.content.split(" ");

            if(rtyu[1] == undefined){
                message.reply("Nombre invalide veuillez re-essayer, si cela continue un problème est donc possible.");
            }
            else {
                let number = parseInt(rtyu[1]);

                if(isNaN(number)){
                    message.reply("Nombre de message invalide.");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Suppression de " + messages.size + " messages réussi !");
                        message.reply("Le clear à fonctionné correctement !");
                    }).catch(err => {
                        console.log("Erreur de clear :" + err);
                    });
                }
            }
        }
    }


    var embed = new Discord.MessageEmbed()
    if(message.content.startsWith(prefix + "play")){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");

                if(largs[1]){
                    message.reply("Lien de la vidéo invalide ou incorrect");

                }
                else {


                    let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));
                    
                dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    connection.disconnect();
                });

                dispatcher.on("error", err => {
                    console.log("erreur de dispatcher : " + err);
                 })
                }
            }).catch(err => {
                message.reply("Une erreur est survenue sois du lien qui est invalide ou bien d'une erreur du bot : " + err);
            });
        }
        else {
            message.reply("Vous devez etre en vocal pour faire cette commande.");
        }
    }

    if(message.member.hasPermission("BAN_MEMBERS")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre introuvable ou inexistant.");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + " à été banni du serveur avec succès");
                }
                else {
                    message.reply("Impossible de ban cette personne. Sois la personne est le propriétaire ou bien un role au dessus du mien !");
                }
            }
        }
    }

    if(message.member.hasPermission("KICK_MEMBERS")){
        if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre introuvable ou inexistant.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " à été kick du serveur avec succès");
                }
                else {
                    message.reply("Impossible de kick cette personne. Sois la personne est le propriétaire ou bien un role au dessus du mien !");
                }
            }
        }
    }
    
    //-ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }

    if(message.content == "salut"){
        message.react("👋")
        message.reply("Salut !");
    }

    if(message.content == "Salut"){
        message.react("👋")
        message.reply("Salut !");
    }

    if(message.content == "Dev"){
        message.reply("Mon développeur est Brinouxe !")
    }

    if(message.content == prefix + "dev"){
        message.reply("Mon développeur est Brinouxe !")
    }

    if(message.content == "gargamel"){
        message.reply("gargamel va manger ta gamel FDP :) : https://www.youtube.com/watch?v=2HVaD0Dxdjs")
    }

    if(message.content == "salut !"){
        message.react("👋")
        message.reply("Salut !");
    }

    if(message.content == "Salut !"){
        message.react("👋")
        message.reply("Salut !");
    }


    if(message.content == "Slt"){
        message.react("👋")
        message.reply("Salut !");
    }

    if(message.content == "Salut !"){
        message.react("👋")
        message.reply("Salut !");
    }

});

Client.login("ODM0NDg4OTIwMTY3MDIyNjU0.YIBoXg.3shQIdlzQ96qsSqd95sUctqaUWk");