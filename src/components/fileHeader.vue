<template>
  <v-card class="bg-deep-purple-darken-2 mx-15">
    <v-card-text>
      <h3>
        <v-icon icon="fa-solid fa-file-code" class="mr-3" />{{ filename }}
      </h3>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    filename: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
