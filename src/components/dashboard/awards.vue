<template>
  <v-card>
    <v-img
      height="50"
      src="https://img.freepik.com/premium-vector/dark-purple-abstract-background-that-represents-speed-is-decorated-with-dots-lines_49459-670.jpg?w=2000"
      cover
    >
      <v-card-title class="text-center">Awards and Certifications</v-card-title>
    </v-img>
    <v-card-item>
      <v-list lines="two">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :title="item.title"
          :prepend-avatar="avatarSource(item.title)"
        >
          <template v-slot:subtitle>
            <div>{{ item.description }}</div>
          </template>
          <template v-slot:append>
            <v-btn
              color="deep-purple"
              icon="fa-solid fa-eye"
              size="small"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-card-item>
    <v-card-actions>
      <v-btn block>See More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { avatarSource } from '@/utilities/dicebear'

export default {
  data: () => ({
    items: [
      {
        title: 'Vue.js Master',
        description: 'Text description of award',
      },
      {
        title: 'Award 2',
        description: 'Text description of award',
      },
      {
        title: 'Certification',
        description: 'Text description of award',
      },
      {
        title: 'Completion Badge',
        description: 'Text description of award',
      },
    ],
  }),
  methods: {
    avatarSource,
  },
}
</script>

<style lang="scss" scoped></style>
