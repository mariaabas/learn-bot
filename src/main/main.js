const Telegraf = require('telegraf')
/*const RedditRepository = require('./repository')*/
const TOKEN_TELEGRAM = "1120886143:AAFO0hBoN65703lGn1InTlbFC_efofaNsy4"

const bot = new Telegraf(TOKEN_TELEGRAM)
/*const reddit = new RedditRepository('/RedditRepository');*/

bot.hears('hi', ctx => {
    return ctx.reply('Hey!');
})
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on( 'sticker', (ctx) => ctx.reply('👍'))
/*bot.on( 'text', (ctx => {
        var message = ctx.message.text
        var responseReddit = reddit.getInformationFromReddit(message)
        return ctx.reply(responseReddit);
    })
)*/

bot.startPolling();
