<template>
  <v-row>
    <v-col cols="8">
      <h2 class="ml-2">Active Courses</h2>
      <active-courses class="my-5" />
      <h2 class="ml-2 mt-8">Other Courses</h2>
      <courses class="my-5" />
    </v-col>
    <v-col cols="4" class="mt-3">
      <v-row class="mt-16">
        <blog />
      </v-row>
      <v-row class="mt-16">
        <notifications />
      </v-row>
      <v-row class="mt-16">
        <awards />
      </v-row>
      <v-row class="mt-16">
        <links />
      </v-row>
      <v-row>
        <li>Scheduled course events, notifications, alerts separate?</li>
        <li>subscription?</li>
        <li>recent news/blog?</li>
      </v-row>
    </v-col>
  </v-row>
  <ul></ul>
</template>

<script>
import activeCourses from '@/components/dashboard/activeCourses.vue'
import blog from '@/components/dashboard/blog.vue'
import awards from '@/components/dashboard/awards.vue'
import notifications from '@/components/dashboard/notifications.vue'
import links from '@/components/dashboard/links.vue'
import courses from '@/views/courses.vue'

export default {
  components: {
    activeCourses,
    blog,
    notifications,
    awards,
    links,
    courses,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
