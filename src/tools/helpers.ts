export function getEnumKeyByEnumValue<T extends { [index: string]:string }>(myEnum: T, enumValue?: string): keyof T | undefined {
  if (!enumValue) return undefined
  
  const keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue)
  return keys.length > 0 ? keys[0] : undefined
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
