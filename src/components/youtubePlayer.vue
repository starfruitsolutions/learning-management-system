<template>
  <iframe
    :src="source"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen=""
  />
</template>

<script>
export default {
  props: ['url'],
  computed: {
    source() {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = this.url.match(regExp)

      return '//www.youtube.com/embed/' + match[2]
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
