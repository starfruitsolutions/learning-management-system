<template>
  <v-row>
    <v-col v-for="course in courses" :key="course.id" cols="6" class="pa-5">
      <course-card
        :id="course.expand.course.id"
        :name="course.expand.course.name"
        :image="course.expand.course.image"
        current-unit=""
        progress="60"
        :description="course.expand.course.description"
        :categories="course.expand.course.categories"
        link-text="continue"
      />
    </v-col>
  </v-row>
</template>

<script>
import { pb, currentUser } from '@/stores/pocketbase'
import courseCard from '@/components/cards/course.vue'

export default {
  components: {
    courseCard,
  },
  data() {
    return {
      currentUser,
      courses: [],
    }
  },
  async mounted() {
    const courses = await pb.collection('courseProgress').getList(1, 10, {
      filter: `user = "${this.currentUser.id}"`,
      sort: '-created',
      expand: 'course',
    })
    this.courses = courses.items
  },
}
</script>

<style lang="scss" scoped></style>
