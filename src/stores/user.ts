import { defineStore } from 'pinia'
import { pb } from './pocketbase.ts'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(pb.authStore.model)

  pb.authStore.onChange(() => {
    user.value = pb.authStore.model
  })

  async function login(email, password) {
    await pb.collection('users').authWithPassword(email, password)
  }

  async function logout() {
    pb.authStore.clear()
  }

  return { user, login, logout }
})
