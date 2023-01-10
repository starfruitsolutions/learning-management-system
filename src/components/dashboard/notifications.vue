<template>
  <list-card
    header="Awards & Certifications"
    :items="items"
    more-url=""
    avatar-type="bottts"
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
        title: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        id: 2,
        title: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
      },
      {
        id: 3,
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
      },
      {
        id: 4,
        title: 'Birthday gift',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
