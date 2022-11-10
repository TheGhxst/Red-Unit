(async()=>{
    // default imports
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const { 
        MessageEmbed, 
        MessageButton, 
        MessageActionRow, 
        Intents, 
        Permissions, 
        MessageSelectMenu 
    }= require("discord.js")
    const fs = require('fs');
    let process = require('process');
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    const os = require("os-utils");
    const ms = require("ms")
    let https = require("https")
    
    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire:null,
        joiningMember:null,
        reply:null,
        player:null,
        manager:null,
        Inviter:null,
        message:null,
        notifer:null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if(!require('./package.json').dependencies['discord.js'].includes("13.")) console.log("Seems you arent using v13 please run `npm i discord.js@13.12.0`");

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION", 
            "CHANNEL"
        ]
    });

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function (err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code
    

    // blockly code
    var button, embed_title, embed_description, embed_image, embed_color;
    
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (((s4dmessage.content) || '').startsWith('ru!testwelcome' || '')) {
        (s4dmessage.author).send({content: String(['<@',(s4dmessage.author).id,'>'].join('')), embeds: [{
        color: String('#ff0000'),
        title: String(['👋 Bienvenue sur ',(s4d.client.guilds.cache.get('1039512038688423966')).name,' !'].join('')),
        description: String(['Aujourd\'hui !Tu deviendra Pirate ,',(s4dmessage.author).username,` !**
    
        **Tu es désormais membre du serveur Red Unit !**
    
        ** Avant de faire quoi que ce soit sur notre serveur ,je t'invite à lire notre <#1039514062326870056> pour éviter tout mal-entendu entre les modérateurs et nos membres  !**
    
        **Sur Red Unit ,tu peux aussi participer à des concours ou giveaway pour gagner des récompenses ,la récompense la plus courante sur notre serveur sont les robux **
    
        **Pour plus d'information sur Red Unit ,je t'invite à lire notre <#1039514064763764806> ! **
    
        **Bon séjour sur [Red Unit](https://discord.gg/ZKK2peMjY3) !**`].join('')),
        image: {
                    url: String('https://cdn.discordapp.com/attachments/1039514124629069864/1040346095248748644/Bienvenue_Red_Unit.png')
                },
        }]});
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (((s4dmessage.content) || '').startsWith('ru!help' || '')) {
        button = ((s4dmessage.author).id);
        let button = new MessageButton()
          button.setStyle("SUCCESS");button.setEmoji('🆘');s4dmessage.channel.send({
                  content: String('Aide Red Unit [FR]'),
                  components: [new MessageActionRow().addComponents(button)],
                  content: String([<@,(s4dmessage.author).id,'>'].join('')), embeds: [{
          color: String('#33ff33'),
          title: String('Aide Red Unit [FR]'),
          description: String(**Voici ms commandes :**
    
          ru!help : obtenir de l'aide à propos du bot
    
          ru!embed : faire un embed
    
          ru!ping : voir le ping actuel du bot
    
          ru!welcome : tester le système de bienvenue
    
          ru!goodbye : tester le système d'aurevoir
    
          **Red Unit [FR]**),
          }]
                  });}
    
    });
    
    s4d.client.on('guildMemberAdd', async (param1) => {
    s4d.joiningMember = param1;
      button = ((s4d.joiningMember.user).id);
      (s4d.joiningMember).send({content: String(['<@',(s4d.joiningMember.user).id,'>'].join('')), embeds: [{
      color: String('#ff0000'),
      title: String(['👋 Bienvenue sur ',(s4d.client.guilds.cache.get('1039512038688423966')).name,' !'].join('')),
      description: String(['Aujourd\'hui !Tu deviendra Pirate ,',(s4d.joiningMember.user).username,` !**
    
      **Tu es désormais membre du serveur Red Unit !**
    
      ** Avant de faire quoi que ce soit sur notre serveur ,je t'invite à lire notre <#1039514062326870056> pour éviter tout mal-entendu entre les modérateurs et nos membres  !**
    
      **Sur Red Unit ,tu peux aussi participer à des concours ou giveaway pour gagner des récompenses ,la récompense la plus courante sur notre serveur sont les robux **
    
      **Pour plus d'information sur Red Unit ,je t'invite à lire notre <#1039514064763764806> ! **
    
      **Bon séjour sur [Red Unit](https://discord.gg/ZKK2peMjY3) !**`].join('')),
      image: {
                  url: String('https://cdn.discordapp.com/attachments/1039514124629069864/1040346095248748644/Bienvenue_Red_Unit.png')
              },
      }]});
    s4d.joiningMember = null
    });
    
    await s4d.client.login('TOKEN').catch((e) => {
            const tokenInvalid = true;
            const tokenError = e;
            if (e.toString().toLowerCase().includes("token")) {
                throw new Error("An invalid bot token was provided!")
            } else {
                throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
            }
        });
    
    s4d.client.on('guildMemberRemove', async (param1) => {
    s4d.leavingMember = param1;
      (s4d.leavingMember).send({content: String(['<@',(s4d.leavingMember.user).id,'>'].join('')), embeds: [{
      color: String('#ff0000'),
      title: String('à bientôt !'),
      description: String('Paix à ton âme chers soldat ! 🏴‍☠️'),
      image: {
                  url: String('https://cdn.discordapp.com/attachments/1039514124629069864/1040349053050966047/Aurevoir_Red_Unit.png')
              },
      }]});
    s4d.leavingMember = null
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (((s4dmessage.content) || '').startsWith('ru!ping' || '')) {
        (s4dmessage).reply({embeds: [{
        color: String('#3366ff'),
        title: String(['> **Ping Actuel du bot : ',s4d.client.ws.ping,'ms **'].join('')),
        }], allowedMentions: {
                repliedUser: true
            }});
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (((s4dmessage.content) || '').startsWith('ru!goodbye' || '')) {
        (s4dmessage.author).send({content: String(['<@',(s4dmessage.author).id,'>'].join('')), embeds: [{
        color: String('#ff0000'),
        title: String('à bientôt !'),
        description: String('Paix à ton âme chers soldat ! 🏴‍☠️'),
        image: {
                    url: String('https://cdn.discordapp.com/attachments/1039514124629069864/1040349053050966047/Aurevoir_Red_Unit.png')
                },
        }]});
      }
    
    });
    
    s4d.client.on('messageCreate', async (s4dmessage) => {
      if (((s4dmessage.content) || '').startsWith('ru!embed' || '')) {
        if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
          (s4dmessage.channel).send({embeds: [{
          color: String('#3366ff'),
          title: String('Quelle sera le titre de votre Embed ?'),
          description: String('Faîtes `cancel` pour annuler'),
          }]}).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
           s4d.message = collected.first();
             embed_title = (s4dreply);
            if (embed_title == 'cancel') {
              s4dmessage.reply({embeds: [{
              color: String('#33ff33'),
              title: String('L\'embed a bien été annulé !'),
              }], allowedMentions: {
                      repliedUser: true
                  }}).then(async (s4dfrost_real_reply) =>{
                 s4dfrost_real_reply.react('✅');
                await delay(Number(1.5)*1000);
                (s4dmessage.channel).bulkDelete((4|1));
    
              });
            } else {
              (s4dmessage.channel).send({embeds: [{
              color: String('#3366ff'),
              title: String('Quelle sera la description de votre embed ?'),
              description: String('Faîtes `cancel` pour annuler'),
              }]}).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
               s4d.message = collected.first();
                 embed_description = (s4dreply);
                if (embed_description == 'cancel') {
                  s4dmessage.reply({embeds: [{
                  color: String('#33ff33'),
                  title: String('L\'embed a bien été annulé !'),
                  }], allowedMentions: {
                          repliedUser: true
                      }}).then(async (s4dfrost_real_reply) =>{
                     s4dfrost_real_reply.react('✅');
                    await delay(Number(1.5)*1000);
                    (s4dmessage.channel).bulkDelete((5|1));
    
                  });
                } else {
                  (s4dmessage.channel).send({embeds: [{
                  color: String('#3366ff'),
                  title: String('Quelle sera l\'image de votre embed ?'),
                  description: String('Faîtes `cancel` pour annuler'),
                  }]}).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                   s4d.message = collected.first();
                     embed_image = (s4dreply);
                    if (embed_image == 'cancel') {
                      s4dmessage.reply({embeds: [{
                      color: String('#33ff33'),
                      title: String('L\'embed a bien été annulé !'),
                      }], allowedMentions: {
                              repliedUser: true
                          }}).then(async (s4dfrost_real_reply) =>{
                         s4dfrost_real_reply.react('✅');
                        await delay(Number(1.5)*1000);
                        (s4dmessage.channel).bulkDelete((10|1));
    
                      });
                    } else {
                      (s4dmessage.channel).send({embeds: [{
                      color: String('#3366ff'),
                      title: String('Quelle sera la couleur de votre embed ?'),
                      description: String(`couleurs disponibles :
    
                      \`bleu foncé\`
                      \`bleu\`
                      \`bleu cyan\`
                      \`rouge\`
                      \`orange
                      \`jaune\`
                      \`vert\`
                      \`violet\`
                      \`rose\`
                      \`blanc\`
                      \`noir\``),
                      }]}).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (5*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
                       s4d.message = collected.first();
                         embed_color = (s4dreply);
                        if (embed_color == 'bleu foncé') {
                          embed_color = '#000099';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'bleu') {
                          embed_color = '#3366ff';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'bleu cyan') {
                          embed_color = '#66ffff';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'rouge') {
                          embed_color = '#ff0000';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'orange') {
                          embed_color = '#ff9900';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'jaune') {
                          embed_color = '#ffff00';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'vert') {
                          embed_color = '#33ff33';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'violet') {
                          embed_color = '#6600cc';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'rose') {
                          embed_color = '#ff99ff';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'blanc') {
                          embed_color = '#ffffff';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else if (embed_color == 'noir') {
                          embed_color = '#000000';
                          (s4dmessage.channel).bulkDelete((11|1));
                          s4dmessage.channel.send({content:String('Chargement.')}).then(async (s4dreply) =>{
                             await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement.')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement..')});
                            await delay(Number(0.2)*1000);
                            s4dreply.edit({content:String('Chargement...')});
                            await delay(Number(0.2)*1000);
                            s4dreply.delete();
                            s4dmessage.channel.send({embeds: [{
                            color: String(embed_color),
                            title: String(embed_title),
                            description: String(embed_description),
                            image: {
                                        url: String(embed_image)
                                    },
                            }]});
    
                          });
                        } else {
                          s4dmessage.channel.send({embeds: [{
                          color: String('#ff0000'),
                          title: String('Couleur invalide !'),
                          }]});
                        }
    
                       s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content: String(['<@',(s4dmessage.author).id,'>'].join('')), embeds: [{
                        color: String('#ff6600'),
                        title: String('Temp écoulé...'),
                        }]}).then(async (s4dreply) =>{
                           s4dreply.react('🕰️');
                          await delay(Number(2)*1000);
                          (s4dmessage.channel).bulkDelete((10|1));
    
                        });
                       });
                      })
                    }
    
                   s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content: String(['<@',(s4dmessage.author).id,'>'].join('')), embeds: [{
                    color: String('#ff6600'),
                    title: String('Temp écoulé...'),
                    }]}).then(async (s4dreply) =>{
                       s4dreply.react('🕰️');
                      await delay(Number(2)*1000);
                      (s4dmessage.channel).bulkDelete((8|1));
    
                    });
                   });
                  })
                }
    
               s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content: String(['<@',(s4dmessage.author).id,'>'].join('')), embeds: [{
                color: String('#ff6600'),
                title: String('Temp écoulé...'),
                }]}).then(async (s4dreply) =>{
                   s4dreply.react('🕰️');
                  await delay(Number(2)*1000);
                  (s4dmessage.channel).bulkDelete((4|1));
    
                });
               });
              })
            }
    
           s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content: String(['<@',(s4dmessage.author).id,'>'].join('')), embeds: [{
            color: String('#ff6600'),
            title: String('Temp écoulé...'),
            }]}).then(async (s4dreply) =>{
               s4dreply.react('🕰️');
              await delay(Number(2)*1000);
              (s4dmessage.channel).bulkDelete((2|1));
    
            });
           });
          })
        } else {
          s4dmessage.channel.send({embeds: [{
          color: String('#ff0000'),
          title: String('Permission manquante : manager server'),
          }]}).then(async (s4dreply) =>{
             s4dreply.react('📛');
    
          });
        }
      }
    
    });
    
    return s4d
})();