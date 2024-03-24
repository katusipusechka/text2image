import { Callback, ContextWithSession } from "../types";

export enum CallbackQueries {
  INPUT_TEXT='input_text',
}

export type CallbackQueryList = Record<CallbackQueries, Callback>
