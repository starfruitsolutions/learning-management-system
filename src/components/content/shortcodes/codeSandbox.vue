<template>
  <iframe
    :src="src"
    sandbox="allow-forms allow-presentation allow-same-origin allow-scripts"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 500px;
  border: 0;
  overflow: hidden;
}
</style>
