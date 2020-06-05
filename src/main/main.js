const Telegraf = require('telegraf')
const TOKEN_TELEGRAM = "1120886143:AAFO0hBoN65703lGn1InTlbFC_efofaNsy4"

const app = new Telegraf(TOKEN_TELEGRAM)

app.hears('hi', ctx => {
    return ctx.reply('Hey!');
})

app.startPolling();
