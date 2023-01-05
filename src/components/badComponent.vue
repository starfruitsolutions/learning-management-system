<template>
  <v-alert type="warning"> Bad component: {{ shortcode }} </v-alert>
</template>

<script>
export default {
  props: ['shortcode'],
}
</script>

<style lang="scss" scoped></style>
