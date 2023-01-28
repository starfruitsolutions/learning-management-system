<template>
  <v-navigation-drawer class="py-5" width="350" permanent>
    <div class="px-8 my-5">
      <h1>{{ courseStore.course.name }}</h1>
      <p>{{ courseStore.course.description }}</p>
    </div>
    <v-list>
      <v-list-item
        v-for="(unit, index) in courseStore.courseUnits"
        :key="unit.id"
        class="px-8"
        @click="loadUnit(index)"
      >
        <template #prepend>
          <v-icon icon="fa-regular fa-square" color="green" class="mr-3" />
          {{ unit.name }}
        </template>
        <template #append>
          <v-icon icon="fa-regular fa-clock" color="light-blue" class="mr-3" />
          {{ unit.time }}
        </template>
      </v-list-item>
    </v-list>
    <template #append>
      <div class="pa-2">
        <v-btn :to="{ path: '/courses/' }" block> Back to courses </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <v-row class="pa-15">
    <v-card width="90%" min-height="80vh" class="mx-auto">
      <course-content :src="currentUnit.text" />
    </v-card>
  </v-row>
</template>

<script>
import { asset } from '@/stores/pocketbase'
import { mapStores } from 'pinia'
import { useCourseStore } from '@/stores/course'
import courseContent from '@/components/course/content.vue'

export default {
  components: {
    courseContent,
  },
  data() {
    return {
      currentUnit: {},
    }
  },
  computed: {
    ...mapStores(useCourseStore),
  },
  async mounted() {
    await this.courseStore.getCourse(this.$route.params.id)
    await this.courseStore.getCourseUnits(this.$route.params.id)
    this.loadUnit(0)
  },
  methods: {
    asset,
    loadUnit(index) {
      this.currentUnit = this.courseStore.courseUnits[index]
    },
  },
}
</script>
