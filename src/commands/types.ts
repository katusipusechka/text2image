import { Callback } from "../types"

export enum Commands {
  START='start',
  HELP='help',
  GENERATE='generate',
  CANCEL='cancel',
}

export type CommandList = Record<Commands, Callback>

