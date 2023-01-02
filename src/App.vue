<template>
  <v-app dark>
    <v-app-bar app color="deep-purple accent-4" class="px-5" height="100">
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
      <template v-slot:append>
        <v-btn v-if="!currentUser" :to="{ path: '/login' }"> Login </v-btn>
        <v-list-item
          v-else
          @click.stop="menuOpen = !menuOpen"
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          :title="currentUser.username"
          subtitle="Logged in"
        />
      </template>
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

export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
      currentUser,
    }
  },
  methods: {
    logout() {
      pb.authStore.clear()
    },
  },
}
</script>
