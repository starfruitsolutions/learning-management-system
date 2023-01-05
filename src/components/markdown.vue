<template>
  <markdown :source="src" html break class="pa-15" />
</template>

<script>
/*
uses markdown-it package. 
We'll want to ensure sanitization or make our own parser if we allow others to make courses
*/
import markdown from 'vue3-markdown-it'
import 'highlight.js/styles/monokai.css'

export default {
  props: ['src'],
  components: {
    markdown,
  },
}
</script>

<style lang="scss" scoped></style>
