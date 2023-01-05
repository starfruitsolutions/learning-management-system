<template>
  <iframe :src="src" frameborder="0" />
</template>

<script>
export default {
  props: ['name'],
  computed: {
    src() {
      return 'https://meet.jit.si/starfruit-academy-' + this.name
    },
  },
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>
