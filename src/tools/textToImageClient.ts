import { sleep } from "./";
import { http } from "./axios";

export type Uuid = string

interface GenerateParams {
  query: string
}

interface Params {
  type: "GENERATE";
  style: string;
  width?: number,
  height?: number,
  num_images?: 1,
  negativePromptUnclip?: string,
  generateParams: GenerateParams
}

export class TextToImageClient {

  async generate(params: Params): Promise<Uuid | undefined> {
    try {
      const payload = this.getPayload(params)
      const { data } = await http.post('/key/api/v1/text2image/run?model_id=4', payload, { headers: { 'Content-Type': 'multipart/form-data' } })
      
      return data.uuid
    } catch(e) {
      console.error(e);
      return undefined
    }
  }

  async checkGeneration(uuid: Uuid, attemps: number = 10): Promise<string | undefined> {
    if (attemps <= 0) return undefined
    
    try {
      const { data } = await http.get(`key/api/v1/text2image/status/${uuid}`)
      if (data.status === 'DONE') return data.images[0]

      await sleep(10000)
      return this.checkGeneration(uuid, attemps - 1)
    } catch(e) {
      console.log(e);
      return undefined
    }
  }

  private getPayload(params: Params): FormData {
    const payload = new FormData()
    const json = JSON.stringify(params)
    const blob = new Blob([json], {
      type: 'application/json'
    })

    payload.append("params", blob)
    return payload
  }
}
