<template>
  <v-navigation-drawer
    class="bg-deep-purple-darken-1 py-5"
    width="300"
    permanent
  >
    <div class="px-8">
      <h1>{{ course.name }}</h1>
      <p>{{ course.description }}</p>
    </div>
    <v-list>
      <v-list-item
        v-for="(unit, index) in units"
        :key="unit.id"
        @click="loadUnit(index)"
        prepend-icon="fa-solid fa-person-chalkboard"
        class="px-8"
      >
        {{ unit.name }}
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn :to="{ path: '/courses/' }" block> Back to courses </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <v-row> </v-row>
  <v-row class="px-15">
    <v-card width="100%" min-height="80vh">
      <youtube-player
        v-if="currentUnit.video"
        :name="currentUnit.name"
        :url="currentUnit.video"
      />
      <ascii-cinema-player
        v-if="currentUnit.asciiCinemaFile"
        :key="currentUnit.asciiCinemaFile"
        :src="asset('units', currentUnit.id, currentUnit.asciiCinemaFile)"
      />
      <v-card-title>{{ currentUnit.name }}</v-card-title>
      <v-card-text class="pa-15">
        {{ currentUnit.description }}
        <markdown :source="currentUnit.text"/>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { pb, asset } from '@/stores/pocketbase'

import youtubePlayer from '../components/youtubePlayer.vue'
import asciiCinemaPlayer from '../components/asciiCinemaPlayer.vue'
import markdown from '../components/markdown.vue'

export default {
  components: {
    youtubePlayer,
    asciiCinemaPlayer,
    markdown
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
