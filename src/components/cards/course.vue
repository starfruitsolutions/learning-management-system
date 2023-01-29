<template>
  <v-card class="fill-height">
    <image-header :src="asset('courses', id, image)" />
    <v-card-item height="600">
      <v-progress-linear
        :model-value="progress"
        color="light-blue"
        height="10"
        striped
        class="my-5"
      />
      <v-card-title class="text-h5">{{ name }}</v-card-title>
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

    <v-card-actions>
      <v-btn :to="{ path: '/course/' + id }" block> {{ linkText }} </v-btn>
    </v-card-actions>
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
    name: {
      type: String,
      default: 'Course',
    },
    categories: {
      type: Array,
      default: () => ['category'],
    },
    image: {
      type: String,
      default: '',
    },
    currentUnit: {
      type: String,
      default: '',
    },
    progress: {
      type: String,
      default: '0',
    },
    description: {
      type: String,
      default: 'Course description...',
    },
    linkText: {
      type: String,
      default: '',
    },
  },
  methods: {
    asset,
  },
}
</script>

<style lang="scss" scoped></style>
