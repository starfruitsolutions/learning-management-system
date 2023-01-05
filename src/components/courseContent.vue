<template>
  <component
    v-for="element in elements"
    :is="element.component"
    :key="element.key"
    v-bind="element"
  ></component>
</template>

<script>
import youtubePlayer from '@/components/youtubePlayer.vue'
import asciiCinemaPlayer from '@/components/asciiCinemaPlayer.vue'
import markdown from '@/components/markdown.vue'
import codepen from '@/components/codepen.vue'
import codeSandbox from '@/components/codeSandbox.vue'

export default {
  props: {
    src: String,
  },
  components: {
    youtube: youtubePlayer,
    asciiCinema: asciiCinemaPlayer,
    markdown,
    codepen,
    codeSandbox,
  },
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    markdown() {
      if (!this.src) {
        return []
      }
      return this.src.split(/{{.*}}/g)
    },
    shortcodes() {
      if (!this.src) {
        return []
      }
      return this.src.match(/{{.*}}/g)
    },
    elements() {
      let elements = []
      this.markdown.forEach((element, index) => {
        if (element.length) {
          elements.push({
            key: this.generateKey(),
            component: 'markdown',
            src: element,
          })
        }
        if (this.shortcodes[index]) {
          elements.push(this.parseShortcode(this.shortcodes[index]))
        }
      })
      return elements
    },
  },
  methods: {
    parseShortcode(shortcode) {
      // shortcode format: {{ component='name' prop-name='value' this='something' }}
      let matches = shortcode.matchAll(/([\w-]+)=['"](.*?)['"]\s/gs)

      let props = {}
      for (const match of matches) {
        //match[1] is prop name match[2] is value
        props[match[1]] = match[2]
      }
      return {
        key: this.generateKey(),
        ...props,
      }
    },
    generateKey() {
      let key = this.count
      this.count++
      return key
    },
  },
}
</script>
