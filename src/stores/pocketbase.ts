import PocketBase from 'pocketbase'
import config from '@/config'
import { ref } from 'vue'

const url = config.POCKETBASE_URL
export const pb = new PocketBase(url)

export const currentUser = ref(pb.authStore.model)

// const store = useUserStore()

pb.authStore.onChange(() => {
  currentUser.value = pb.authStore.model
})

export const asset = (collection, id, filename) => {
    return `${config.POCKETBASE_URL}/api/files/${collection}/${id}/${filename}`
}
