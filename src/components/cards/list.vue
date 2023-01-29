<template>
  <v-card width="100%">
    <text-header>
      {{ header }}
    </text-header>
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
import textHeader from './textHeader.vue'
import { avatarSource } from '@/utilities/dicebear'

export default {
  components: {
    textHeader,
  },
  props: {
    header: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    moreUrl: {
      type: String,
      default: '',
    },
    avatarType: {
      type: String,
      default: '',
    },
    linkPrefix: {
      type: String,
      default: '',
    },
  },
  methods: {
    avatarSource,
  },
}
</script>

<style lang="scss" scoped></style>
