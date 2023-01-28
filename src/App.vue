<template>
  <v-app dark>
    <v-app-bar app color="deep-purple-darken-2" class="px-15" height="100">
      <template #image>
        <v-img
          src="https://img.freepik.com/premium-vector/dark-purple-abstract-background-that-represents-speed-is-decorated-with-dots-lines_49459-670.jpg?w=2000"
          gradient="to bottom right, rgba(97, 29, 191,.7), rgba(67, 9, 117,.7)"
        />
      </template>
      <template #prepend>
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
      <v-btn
        v-for="link in links"
        :key="link.text"
        :to="{ path: link.to }"
        variant="text"
        >{{ link.text }}</v-btn
      >
      <v-btn v-if="!userStore.user" :to="{ path: '/login' }"> Login </v-btn>
      <v-list-item
        v-else
        lines="two"
        :prepend-avatar="avatarSource(userStore.user.id)"
        :title="userStore.user.username"
        subtitle="Logged in"
        @click.stop="menuOpen = !menuOpen"
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
          prepend-icon="fa-solid fa-right-from-bracket"
          title="Log Out"
          @click="userStore.logout"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-10 px-15" fluid>
        <router-view :key="$route.path" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { useUserStore } from '@/stores/user'
import { avatarSource } from '@/utilities/dicebear'

export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
      links: [
        {
          text: 'Blog',
          to: '/blog',
        },
        {
          text: 'Dashboard',
          to: '/dashboard',
        },
        {
          text: 'Courses',
          to: '/courses',
        },
        {
          text: 'Pricing',
          to: '/pricing',
        },
        {
          text: 'Mentors',
          to: '/mentors',
        },
      ],
    }
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    avatarSource,
  },
}
</script>
