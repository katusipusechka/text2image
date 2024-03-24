import { GenStages } from "../message/genStages/types";
import { Callback } from "../types";

export const inputTextCallbackQuery: Callback = (ctx) => {
  ctx.editMessageReplyMarkup(undefined)
  ctx.reply('Введите текст для генерации:')
  ctx.session = { currentGenStage: GenStages.INPUT_TEXT }
}
