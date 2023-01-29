<template>
  <v-img
    :height="height"
    :src="src"
    gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(53, 11, 92, 1)"
    cover
    class="align-end"
  >
    <slot></slot>
  </v-img>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '220',
    },
  },
}
</script>

<style lang="scss" scoped></style>
