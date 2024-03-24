import { Callback } from "../types";

export const helpCallback: Callback = (ctx) => {
  ctx.reply(`Бот разработан Ледовской Екатериной\n\nДоступные команды:\n/start - начать работу с ботом\n/generate - начать генерацию изображения по тексту\n/help - помощь по боту\n/cancel - сбросить введенные параметры (пока не начата генерация)`);
}
