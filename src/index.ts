import { ContextWithSession } from './types'

import { config } from './config'

import { Telegraf } from 'telegraf'
import { session } from 'telegraf/session'

import { commands } from './commands'
import { callbackQueries } from './callbackQueries'
import { messageCallback } from './message'

const bot = new Telegraf<ContextWithSession>(config.BOT_TOKEN)
bot.use(session())

for(const [command, callback] of Object.entries(commands)) {
  bot.command(command, callback)
}

for(const [action, callback] of Object.entries(callbackQueries)) {
  bot.action(action, callback)
}

bot.on('message', messageCallback)

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
