<template>
  <v-row>
    <v-col v-for="course in courses" :key="course.id" cols="4" class="pa-5">
      <v-card>
        <v-img
          height="200"
          :src="url + '/api/files/courses/' + course.id + '/' + course.image"
          cover
          class="mb-5"
        />
        <v-card-item>
          <v-card-title>{{ course.name }}</v-card-title>
          <v-card-subtitle>categories</v-card-subtitle>
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          />
        </v-card-item>

        <v-card-text height="600">
          {{ course.description }}
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange"> Share </v-btn>

          <v-btn :to="{ path: '/course/' + course.id }" color="orange">
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { url, pb } from '@/stores/pocketbase'

export default {
  data() {
    return {
      auth: false,
      courses: [],
      url,
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
