const { MessageEmbed, Client } = require('discord.js');
const { shuffle } = require("lodash");
const bot = new Client();

let chars = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '0', '1',
    '2', '3', '4', '5', '6', '7',
    '8', '9'
];




bot.on("message", message => {
    if (message.content === "/nitro") {
        if(message.channel.type === 'dm') return;
        let url = `https://discord.gift/${shuffle(shuffle(chars).join('').slice(5)).slice(0, 12).join('')}`
        message.member.send(new MessageEmbed()
        .setTitle("**Lien Nitro Gratuit**")
        .setDescription(`**[Nitro Code](${url})**`)
        .addField("Clique sur \"Nitro Code\" pour recevoir ton code Nitro 🚀 !", "**ATTENTION** : Les liens ne sont pas vérifiés.")
        .setColor('PURPLE'))
        .then(message.channel.send(`${message.author} **Vérifies tes DMs ! Ton code *unchecked* a été envoyé.**`))
    }
})



bot.on("message", message => {
    if (message.content === "/paysafe") {
        if(message.channel.type === 'dm') return;
        let chars = [
            '0', '1',
            '2', '3', '4', '5', '6', '7',
            '8', '9'
        ];
        let clc1 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc2 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc3 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc4 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc11 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc22 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc32 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc44 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc12 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc23 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc34 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc45 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc116 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc227 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc328 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`
        let clc449 = `${shuffle(shuffle(chars).join('').slice(5)).slice(3, 5).join('')}`

         message.member.send(new MessageEmbed()
        .setTitle("**Code Paysafe Card**")
        .addField("Voici le code généré :", `${clc1}${clc2}-${clc11}${clc22}-${clc227}${clc44}-${clc449}${clc328}`)
        .setFooter('Les codes ne sont pas vérifiés !')
        .setColor('PURPLE'))
        .then(message.channel.send(`${message.author} **Vérifies tes DMs ! Ton code *unchecked* a été envoyé.**`))
    }
})
    


bot.on("ready", () => { bot.user.setPresence({ activity: { name: '/help | Uncheck Gen By Feylann :)' }, status: 'dnd' }) })

bot.on('message', message => {
if (message.content === "/help") {
    message.channel.send(new MessageEmbed()
    .setTitle('Ce que je génères :')
    .addField('Nitros Uncheckeds :', '`/nitro`')
    .addField('Paysafe Cards', '`/paysafe`')
    .setColor('RANDOM'))
}
})


bot.login("Votre nitro ICI");


// Pour de l'aide : Skoun#2497
