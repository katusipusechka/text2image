import { Callback } from "../types"
import { imageGenerationInlineKeyboard } from "../inlineKeyboards"

export const startCallback: Callback = (ctx) => {
  ctx.reply(`Привет ${ctx.from?.first_name}!`, imageGenerationInlineKeyboard)
}
