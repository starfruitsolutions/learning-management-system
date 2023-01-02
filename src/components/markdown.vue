<template>
    <markdown :source="source" html break/>
</template>

<script>
/*
uses markdown-it package. 
We'll want to ensure sanitization or make our own parser if we allow others to make courses
*/
import markdown from 'vue3-markdown-it'
import 'highlight.js/styles/monokai.css'

export default{
    props:['source'],
    components: {
        markdown
    },
    
}
</script>

<style lang="scss" scoped>

</style>
