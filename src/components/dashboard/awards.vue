<template>
  <list-card
    header="Awards & Certifications"
    :items="userStore.awards"
    more-url=""
    avatar-type="identicon"
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
