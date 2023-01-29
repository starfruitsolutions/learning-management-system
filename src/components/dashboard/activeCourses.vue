<template>
  <v-row>
    <v-col
      v-for="course in courseStore.activeCourses"
      :key="course.id"
      cols="6"
      class="py-5"
    >
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
import { mapStores } from 'pinia'
import { useCourseStore } from '@/stores/course'
import courseCard from '@/components/cards/course.vue'

export default {
  components: {
    courseCard,
  },
  computed: {
    ...mapStores(useCourseStore),
  },
  async mounted() {
    await this.courseStore.getActiveCourses()
  },
}
</script>

<style lang="scss" scoped></style>
