import { defineStore } from 'pinia'
import { pb } from './pocketbase'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(pb.authStore.model)
  const notifications = ref([
    {
      id: 1,
      title: 'Brunch this weekend?',
      subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    {
      id: 2,
      title: 'Summer BBQ',
      subtitle: `Wish I could come, but I'm out of town this weekend.`,
    },
    {
      id: 3,
      title: 'Oui oui',
      subtitle: 'Do you have Paris recommendations? Have you ever been?',
    },
    {
      id: 4,
      title: 'Birthday gift',
      subtitle:
        'Have any ideas about what we should get Heidi for her birthday?',
    }
  ])
  const awards = ref([
    {
      id: 1,
      title: 'Vue.js Master',
      subtitle: 'Text subtitle of award',
    },
    {
      id: 2,
      title: 'Award 2',
      subtitle: 'Text subtitle of award',
    },
    {
      id: 3,
      title: 'Certification',
      subtitle: 'Text subtitle of award',
    },
    {
      id: 4,
      title: 'Completion Badge',
      subtitle: 'Text subtitle of award',
    }
  ])

  pb.authStore.onChange(() => {
    user.value = pb.authStore.model
  })

  async function login(email, password) {
    await pb.collection('users').authWithPassword(email, password)
  }

  async function logout() {
    pb.authStore.clear()
  }

  async function logout() {
    pb.authStore.clear()
  }

  return {
    user,
    notifications,
    awards,
    login,
    logout
  }
})
