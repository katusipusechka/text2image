import { Callback } from "../../types";

export enum GenStages {
  INPUT_TEXT = 'inputText',
  SELECT_STYLE = 'selectStyle'
}

export type GenStageList = Record<GenStages, Callback>
