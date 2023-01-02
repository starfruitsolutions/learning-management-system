import PocketBase from 'pocketbase'
import config from '@/config'
import {ref} from 'vue'

export const url = config.POCKETBASE_URL
export const pb = new PocketBase(url)

export const currentUser = ref(pb.authStore.model)

// const store = useUserStore()

pb.authStore.onChange((auth) => {
    currentUser.value = pb.authStore.model
})
