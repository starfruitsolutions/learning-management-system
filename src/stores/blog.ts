import { defineStore } from 'pinia'
import { pb } from './pocketbase'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [],
    blog: {}
  }),
  actions: {
    async getBlogs() {
      const { items } = await pb.collection('blogs').getList(1, 50, {
        sort: '-created',
      })
      this.blogs = items
    },
    async getBlog(id) {
      const blog = await pb.collection('blogs').getOne(id)
      this.blog = blog
    }
  },
})
