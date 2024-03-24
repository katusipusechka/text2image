import { Callback } from "../types"

export const cancelCallback: Callback = async (ctx) => {
  ctx.reply('Параметры очищены.\nНачать генерацию заново /generate', { reply_markup: { remove_keyboard: true } })
  ctx.session = undefined
}
