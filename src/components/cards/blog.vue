<template>
  <v-card width="100%" class="fill-height" :to="{ path: '/blog/' + id }">
    <image-header :src="asset('blogs', id, image)">
      <h2 class="px-5">{{ title }}</h2>
    </image-header>
    <v-card-item height="600" class="pa-5">
      <v-chip
        v-for="category in categories"
        :key="category"
        color="primary"
        label
        variant="outlined"
        class="mr-4 my-2"
        size="small"
      >
        {{ category }}
      </v-chip>
      <p class="my-3">{{ description }}</p>
    </v-card-item>
  </v-card>
</template>

<script>
import imageHeader from './imageHeader.vue'
import { asset } from '@/stores/pocketbase'

export default {
  components: {
    imageHeader,
  },
  props: {
    id: {
      type: String,
      default: 'none',
    },
    title: {
      type: String,
      default: 'Title',
    },
    categories: {
      type: Array,
      default: () => ['News'],
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: 'Course description...',
    },
  },
  methods: {
    asset,
  },
}
</script>

<style lang="scss" scoped></style>
