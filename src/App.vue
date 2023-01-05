<template>
  <v-app dark>
    <v-app-bar app color="deep-purple-darken-2" class="px-5" height="100">
      <template v-slot:prepend>
        <v-img
          height="50"
          width="50"
          src="/src/assets/logo-dark-icon-only.png"
        />
      </template>
      <v-app-bar-title>
        <h2>Starfruit Academy</h2>
      </v-app-bar-title>
      <v-spacer />
      <v-btn :to="{ path: '/courses' }" variant="text">Courses</v-btn>
      <v-btn :to="{ path: '/pricing' }" variant="text">Pricing</v-btn>
      <v-btn :to="{ path: '/mentors' }" variant="text">Mentors</v-btn>
      <v-btn v-if="!currentUser" :to="{ path: '/login' }"> Login </v-btn>
      <v-list-item
        v-else
        @click.stop="menuOpen = !menuOpen"
        lines="two"
        :prepend-avatar="avatarSource(currentUser.id)"
        :title="currentUser.username"
        subtitle="Logged in"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="menuOpen" location="right">
      <v-list density="compact" nav>
        <v-list-item prepend-icon="fa-solid fa-user" title="Profile" />
        <v-list-item
          prepend-icon="fa-solid fa-credit-card"
          title="Subscription"
        />
        <v-list-item
          @click="logout"
          prepend-icon="fa-solid fa-right-from-bracket"
          title="Log Out"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { pb, currentUser } from '@/stores/pocketbase'
import { avatarSource } from '@/utilities/dicebear'

export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
      currentUser,
    }
  },
  methods: {
    avatarSource,
    logout() {
      pb.authStore.clear()
    },
  },
}
</script>
