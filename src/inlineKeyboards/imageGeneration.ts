import { Markup } from "telegraf";
import { CallbackQueries } from "../callbackQueries/types";

export const imageGenerationInlineKeyboard = Markup.inlineKeyboard([
  Markup.button.callback('Генерация по тексту', CallbackQueries.INPUT_TEXT),
])
