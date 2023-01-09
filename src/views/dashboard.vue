<template>
  <v-row>
    <v-col cols="8">
      <active-courses />
    </v-col>
    <v-col cols="4">
      <notifications />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="8">
      <courses />
    </v-col>
    <v-col cols="4">
      <awards />
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
