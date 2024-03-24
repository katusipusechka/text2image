import { inputTextCallbackQuery } from "./inputText";
import { CallbackQueries, CallbackQueryList } from "./types";

export const callbackQueries: CallbackQueryList = {
  [CallbackQueries.INPUT_TEXT]: inputTextCallbackQuery
}
