<template>
  <v-alert type="warning"> Bad component: {{ shortcode }} </v-alert>
</template>

<script>
export default {
  props: {
    shortcode: {
      type: String,
      default: '[ empty ]',
    },
  },
}
</script>

<style lang="scss" scoped></style>
