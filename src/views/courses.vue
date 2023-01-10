<template>
  <v-row>
    <v-col v-for="course in courses" :key="course.id" cols="6" class="pa-5">
      <course-card
        :id="course.id"
        :name="course.name"
        :categories="course.categories"
        :image="course.image"
        currentUnit=""
        progress="60"
        :description="course.description"
        link-text="Enroll"
      />
    </v-col>
  </v-row>
</template>

<script>
import { pb } from '@/stores/pocketbase'
import courseCard from '@/components/cards/course.vue'

export default {
  components: {
    courseCard,
  },
  data() {
    return {
      auth: false,
      courses: [],
    }
  },
  async mounted() {
    const pbQuery = await pb.collection('courses').getList(1, 50, {
      //start on page 1 and show 50
      sort: 'name',
      //expand: units // join relational data
    })
    this.courses = pbQuery.items
  },
}
</script>

<style lang="scss" scoped></style>
