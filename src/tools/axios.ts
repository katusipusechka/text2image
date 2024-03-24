import axios from 'axios';
import { config } from "../config";


export const http = axios.create({
  baseURL: 'https://api-key.fusionbrain.ai/',
  headers: {
    'X-Key': `Key ${config.API_KEY}`,
    'X-Secret': `Secret ${config.SECRET_KEY}`
  },
})
