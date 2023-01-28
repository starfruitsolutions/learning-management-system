<template>
  <list-card
    header="Notifications"
    :items="userStore.notifications"
    more-url=""
    avatar-type="bottts"
    link-prefix=""
  />
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '@/stores/user'
import listCard from '@/components/cards/list.vue'

export default {
  components: {
    listCard,
  },
  computed: {
    ...mapStores(useUserStore),
  },
}
</script>

<style lang="scss" scoped></style>
