<template>
  <v-card class="fill-height" :to="{ path: '/blog/' + id }">
    <v-img
      height="220"
      :src="asset('blogs', id, image)"
      gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(53, 11, 92, 1)"
      cover
      class="align-end"
    >
    </v-img>
    <v-card-item height="600">
      <v-card-title class="text-h5">{{ title }}</v-card-title>
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
import { asset } from '@/stores/pocketbase'

export default {
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
