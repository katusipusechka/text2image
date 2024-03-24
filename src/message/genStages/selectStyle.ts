import { Callback, ContextWithSession } from "../../types"
import { Styles } from '../../types'
import { getEnumKeyByEnumValue } from '../../tools'
import { TextToImageClient } from "../../tools/textToImageClient"
import { GenStages } from "./types"

export const selectStyleCallback: Callback = async (ctx) => {
  const currentStyle = getEnumKeyByEnumValue(Styles, ctx.text)
  if (!currentStyle) {
    ctx.reply('Стиль указан неверно, попробуйте ещё раз:')
    return
  }

  ctx.reply('Ваш запрос добавлен в очередь на обработку.', { reply_markup: { remove_keyboard: true } })
  await generateImage(ctx, currentStyle)

  ctx.session = undefined
}


async function generateImage(ctx: ContextWithSession, style: keyof typeof Styles) {
  const client = new TextToImageClient()
  
  const uuid = await client.generate({
    type: 'GENERATE',
    style: style,
    generateParams: {
      query: ctx.session?.dataGenStage?.inputText || ''
    }
  })

  ctx.session = undefined

  if (!uuid) {
    ctx.reply('O-o что-то пошло не так. Попробуйте снова.')
    return
  }

  const img = await client.checkGeneration(uuid)

  if (!img) {
    ctx.reply('O-o произошла ошибка при попытке сгенерировать изображение. Попробуйте снова.')
    return
  }

  const imgbase = Buffer.from(img, 'base64');
  ctx.replyWithPhoto({ source: imgbase })
}
