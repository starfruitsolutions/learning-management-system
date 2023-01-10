<template>
  <v-row>
    <v-col cols="8">
      <h2 class="ml-2">Active Courses</h2>
      <active-courses class="my-5" />
      <h2 class="ml-2 mt-8">Other Courses</h2>
      <courses class="my-5" />
    </v-col>
    <v-col cols="4" class="mt-16">
      <notifications />
      <awards class="mt-16" />
      <li>Scheduled course events</li>
      <li>links: social media, discourse, resources, etc</li>
      <li>alerts</li>
      <li>course listing</li>
    </v-col>
  </v-row>
  <ul></ul>
</template>

<script>
import activeCourses from '@/components/dashboard/activeCourses.vue'
import awards from '@/components/dashboard/awards.vue'
import notifications from '@/components/dashboard/notifications.vue'
import courses from '@/views/courses.vue'

export default {
  components: {
    activeCourses,
    awards,
    notifications,
    courses,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
