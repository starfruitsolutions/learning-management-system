import PocketBase from 'pocketbase'
import config from '@/config'

const url = config.POCKETBASE_URL
export const pb = new PocketBase(url)

export const asset = (collection, id, filename) => {
  return `${config.POCKETBASE_URL}/api/files/${collection}/${id}/${filename}`
}
