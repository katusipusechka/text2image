import { Context } from "telegraf"
import { GenStages } from "./message/genStages/types"

export type Callback = (ctx: ContextWithSession) => void

export interface SessionData {
  currentGenStage: GenStages;
  dataGenStage?: Partial<Record<GenStages, string>>;
}

export interface ContextWithSession extends Context {
  session?: SessionData
}

export enum Styles {
  UHD='Детальное фото',
  ANIME='Аниме',
  DEFAULT='Свой стиль'
}
