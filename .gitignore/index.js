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


bot.on("ready", () => {
    bot.user.setPresence({ activity: { name: '*nitro | Générateur de liens nitros unchekeds' }, status: 'dnd' })
    })

    bot.on("message", message => {
        if (message.content === "*nitro") {
            let url = `https://discord.gift/${shuffle(shuffle(chars).join('').slice(5)).slice(0, 16).join('')}`
            message.member.send(url)
            .then(message.channel.send("**Ton lien __unchecked__ a été envoyé en message privé !** <:boost:742101013896364113>"))
        }
    })

bot.login(process.env.TOKEN);
