<template>
  <v-card width="100%">
    <v-img
      height="50"
      src="https://img.freepik.com/premium-vector/dark-purple-abstract-background-that-represents-speed-is-decorated-with-dots-lines_49459-670.jpg?w=2000"
      gradient="to bottom right, rgba(97, 29, 191,.7), rgba(67, 9, 117,.7)"
      cover
    >
      <v-card-title class="text-center">{{ header }}</v-card-title>
    </v-img>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
