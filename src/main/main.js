const Telegraf = require("telegraf")
const axios = require('axios')
const TOKEN_TELEGRAM = "1120886143:AAFO0hBoN65703lGn1InTlbFC_efofaNsy4"

const bot = new Telegraf(TOKEN_TELEGRAM)

bot.hears('hi', ctx => {
    return ctx.reply('Hey!');
})

bot.start((ctx) => ctx.reply('Welcome!'))

bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.on( 'sticker', (ctx) => ctx.reply('👍'))

bot.on( 'text', (ctx => {
    const message = ctx.message.text;
    axios
        .get(`https://reddit.com/r/${message}/top.json?limit=10`)
        .then(response => {
            const data = response.data.data;
            if (data.children.length < 1) {
                return ctx.reply("The message couldn't be found");
            }
            const link = `https://reddit.com/${data.children[0].data.permalink}`;
            return ctx.reply(link);
        })
        .catch(error => console.log(error));
    })
)

bot.startPolling();

