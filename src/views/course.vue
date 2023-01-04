<template>
  <v-navigation-drawer
    class="py-5"
    width="350"
    permanent
  >
    <div class="px-8 my-5">
      <h1>{{ course.name }}</h1>
      <p>{{ course.description }}</p>
    </div>
    <v-list>
      <v-list-item
        v-for="(unit, index) in units"
        :key="unit.id"
        @click="loadUnit(index)"
        class="px-8"
      >
        <template v-slot:prepend>
          <v-icon icon="fa-regular fa-square" color="green" class="mr-3"/>
          {{ unit.name }}
        </template>
        <template v-slot:append>
          <v-icon icon="fa-regular fa-clock" color="light-blue" class="mr-3"/>
          {{ unit.time }}
        </template>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn :to="{ path: '/courses/' }" block> Back to courses </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <v-row class="pa-15">
    <v-card width="90%" min-height="80vh" class="mx-auto">
      <course-content :src="currentUnit.text"/>
      <v-card-title class="pa-15">{{ currentUnit.name }}</v-card-title>
      <v-card-text class="px-15">
        {{ currentUnit.description }}
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { pb, asset } from '@/stores/pocketbase'

import courseContent from '../components/courseContent.vue'

export default {
  components: {
    courseContent
  },
  data() {
    return {
      auth: false,
      course: {},
      units: [],
      currentUnit: {},
    }
  },
  async mounted() {
    const course = await pb.collection('courses').getOne(this.$route.params.id)
    const units = await pb.collection('units').getList(1, 50, {
      filter: `course = "${this.$route.params.id}"`,
      sort: 'order',
    })
    this.course = course
    this.units = units.items
    this.loadUnit(0)
  },
  methods: {
    asset,
    loadUnit(index) {
      this.currentUnit = this.units[index]
    },
  },
}
</script>
