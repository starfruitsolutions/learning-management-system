<template>
  <v-row>
    <v-col v-for="course in courseStore.courses" :key="course.id" cols="6" class="pa-5">
      <course-card
        :id="course.id"
        :name="course.name"
        :categories="course.categories"
        :image="course.image"
        current-unit=""
        progress="60"
        :description="course.description"
        link-text="Enroll"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapStores } from 'pinia'
import { useCourseStore } from '@/stores/course'
import courseCard from '@/components/cards/course.vue'

export default {
  components: {
    courseCard,
  },
  async mounted() {
    await this.courseStore.getCourses()
  },
  computed: {
    ...mapStores(useCourseStore)
  },
}
</script>

<style lang="scss" scoped></style>
