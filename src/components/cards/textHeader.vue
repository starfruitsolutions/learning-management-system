<template>
  <v-img
    height="50"
    src="https://img.freepik.com/premium-vector/dark-purple-abstract-background-that-represents-speed-is-decorated-with-dots-lines_49459-670.jpg?w=2000"
    gradient="to bottom right, rgba(97, 29, 191,.7), rgba(67, 9, 117,.7)"
    cover
  >
    <v-card-title class="text-center">
      <slot></slot>
    </v-card-title>
  </v-img>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
