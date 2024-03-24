import { inputTextCallback } from "./inputText";
import { selectStyleCallback } from "./selectStyle";
import { GenStageList, GenStages } from "./types";

export const genStages: GenStageList = {
  [GenStages.INPUT_TEXT]: inputTextCallback,
  [GenStages.SELECT_STYLE]: selectStyleCallback,
}