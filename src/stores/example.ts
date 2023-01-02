import { defineStore } from 'pinia'

export const useexampleStore = defineStore('user', {
  state: () => ({
    variable: 0,
  }),
  getters: {
    squared: (state) => state.variable ^ 2,
  },
  actions: {
    async setup() {
      // setip stuff
    },
  },
})
