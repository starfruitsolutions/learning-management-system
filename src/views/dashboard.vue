<template>
  <v-row>
    <v-col cols="8" class="pr-15">
      <v-row>
        <h2>Active Courses</h2>
      </v-row>
      <v-row>
        <active-courses />
      </v-row>
      <v-row>
        <h2 class="mt-8">Other Courses</h2>
      </v-row>
      <v-row>
        <courses />
      </v-row>
    </v-col>
    <v-col cols="4">
      <v-row class="mt-7">
        <notifications />
      </v-row>
      <v-row class="mt-16">
        <blog />
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
