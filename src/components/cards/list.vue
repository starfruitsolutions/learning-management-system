<template>
  <v-card>
    <v-img
      height="50"
      src="https://img.freepik.com/premium-vector/dark-purple-abstract-background-that-represents-speed-is-decorated-with-dots-lines_49459-670.jpg?w=2000"
      gradient="to bottom right, rgba(97, 29, 191,.7), rgba(67, 9, 117,.7)"
      cover
    >
      <v-card-title class="text-center">{{ header }}</v-card-title>
    </v-img>
    <v-card-item>
      <v-list lines="two">
        <v-list-item
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :prepend-avatar="avatarSource(item.id, avatarType)"
        >
          <template #subtitle>
            <div>{{ item.subtitle }}</div>
          </template>
          <template #append>
            <v-btn
              color="deep-purple"
              icon="fa-solid fa-eye"
              size="x-small"
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
  props: ['header', 'items', 'moreUrl', 'avatarType', 'linkPrefix'],
  methods: {
    avatarSource,
  },
}
</script>

<style lang="scss" scoped></style>
