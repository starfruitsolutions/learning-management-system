import { defineStore } from 'pinia'
import { pb, currentUser } from './pocketbase.ts'

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [],
    activeCourses: [],
    course: {},
    courseUnits: [],
  }),
  getters: {},
  actions: {
    async setup() {
      // setup stuff
    },
    async getCourses() {
      const { items } = await pb.collection('courses').getList(1, 50, {
        //start on page 1 and show 50
        sort: 'name',
        //expand: units // join relational data
      })
      this.courses = items
    },
    async getActiveCourses() {
      const { items } = await pb.collection('courseProgress').getList(1, 10, {
        filter: `user = "${currentUser.value.id}"`,
        sort: '-created',
        expand: 'course',
      })
      this.activeCourses = items
    },
    async getCourse(id) {
      const course = await pb.collection('courses').getOne(id)
      this.course = course
    },
    async getCourseUnits(id) {
      const { items } = await pb.collection('units').getList(1, 50, {
        filter: `course = "${id}"`,
        sort: 'order',
      })
      this.courseUnits = items
    },
  },
})
