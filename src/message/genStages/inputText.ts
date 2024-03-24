import { KeyboardButton, ReplyKeyboardMarkup } from "telegraf/typings/core/types/typegram";
import { Callback } from "../../types";
import { Styles } from '../../types'
import { GenStages } from "./types";

const replyKeyboard: ReplyKeyboardMarkup = {
  keyboard: [
    (Object.values(Styles) as Array<string>).map<KeyboardButton>(v => ({ text: v }))
  ],
  resize_keyboard: true,
  one_time_keyboard: true
}

export const inputTextCallback: Callback = (ctx) => {
  ctx.session = { currentGenStage: GenStages.SELECT_STYLE, dataGenStage: { [GenStages.INPUT_TEXT]: ctx.text } }
  ctx.reply('Выберите стиль\n\nЧтобы использовался только ваш запрос без дополнительных стилей, выберите «Свой стиль»', { reply_markup: replyKeyboard })
}
