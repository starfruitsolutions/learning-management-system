<template>
  <v-navigation-drawer class="bg-deep-purple-darken-1 py-5" width="300" permanent>
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
        <v-btn :to="{ path: '/courses/'}" block>
          Back to courses
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  <v-row>
    
  </v-row>
  <v-row class="px-15">
    <v-card width="100%" min-height="80vh">
      <iframe
        :title=currentUnit.name
        :src="currentUnit.video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
      />
      <ascii-cinema-player
        v-if="currentUnit.asciiCinemaFile"
        :key="currentUnit.asciiCinemaFile"
        :src="url + '/api/files/units/' + currentUnit.id + '/' + currentUnit.asciiCinemaFile"
      />
      <v-card-title>{{ currentUnit.name }}</v-card-title>
      <v-card-text>{{ currentUnit.description }}</v-card-text>
    </v-card>
  </v-row>
</template>

<script>

import { url, pb } from '@/stores/pocketbase'
import { convert } from '@/utilities/youtubeEmbed'
import asciiCinemaPlayer from '../components/asciiCinemaPlayer.vue'

export default {
  components: {
    asciiCinemaPlayer
  },
  data() {
    return {
      auth: false,
      url,
      course:{},
      units:[],
      currentUnit: {} 
    }
  },
  async mounted(){
    const course = await pb.collection('courses').getOne(this.$route.params.id)
    const units = await pb.collection('units').getList(1, 50, {
      filter: `course = "${this.$route.params.id}"`,
      sort: 'order',
    });
    this.course = course
    this.units = units.items
    this.loadUnit(0)
  },
  methods: {
    loadUnit(index){
      this.currentUnit = this.units[index]
      this.currentUnit.video = convert(this.currentUnit.video)

    }
  }
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>
