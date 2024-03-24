import { Callback } from "../types";
import { genStages } from "./genStages";

export const messageCallback: Callback = (ctx) => {
  const currentGenStage = ctx.session?.currentGenStage
  if (!currentGenStage) return
  
  genStages[currentGenStage](ctx)
}