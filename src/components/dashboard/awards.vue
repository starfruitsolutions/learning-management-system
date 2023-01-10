<template>
  <list-card
    header="Awards & Certifications"
    :items="items"
    more-url=""
    avatar-type="identicon"
    link-prefix=""
  />
</template>

<script>
import listCard from '@/components/cards/list.vue'

export default {
  components: {
    listCard,
  },
  data: () => ({
    items: [
      {
        id: 1,
        title: 'Vue.js Master',
        subtitle: 'Text subtitle of award',
      },
      {
        id: 2,
        title: 'Award 2',
        subtitle: 'Text subtitle of award',
      },
      {
        id: 3,
        title: 'Certification',
        subtitle: 'Text subtitle of award',
      },
      {
        id: 4,
        title: 'Completion Badge',
        subtitle: 'Text subtitle of award',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
