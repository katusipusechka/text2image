import { Callback } from "../types"
import { GenStages } from "../message/genStages/types"


export const generateCallback: Callback = async (ctx) => {
  ctx.reply('Введите текст для генерации:')
  ctx.session = { currentGenStage: GenStages.INPUT_TEXT }
}
