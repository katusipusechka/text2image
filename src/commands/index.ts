import { startCallback } from './start'
import { helpCallback } from './help'
import { generateCallback } from './generate'
import { CommandList, Commands } from './types'
import { cancelCallback } from './cancel'

export const commands: CommandList = {
  [Commands.START]: startCallback,
  [Commands.HELP]: helpCallback,
  [Commands.GENERATE]: generateCallback,
  [Commands.CANCEL]: cancelCallback
}
