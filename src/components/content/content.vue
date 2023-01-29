<template>
  <component
    :is="element.component"
    v-for="element in elements"
    :key="element.key"
    v-bind="element"
  ></component>
</template>

<script>
import badComponent from './shortcodes/badComponent.vue'
import youtubePlayer from './shortcodes/youtubePlayer.vue'
import asciinemaPlayer from './shortcodes/asciinemaPlayer.vue'
import videoChat from './shortcodes/videoChat.vue'
import markdown from './shortcodes/markdown.vue'
import fileHeader from './shortcodes/fileHeader.vue'
import codepen from './shortcodes/codepen.vue'
import codeSandbox from './shortcodes/codeSandbox.vue'

export default {
  components: {
    badComponent,
    youtube: youtubePlayer,
    asciinema: asciinemaPlayer,
    videoChat,
    markdown,
    fileHeader,
    codepen,
    codeSandbox,
  },
  props: {
    src: {
      type: String,
      default: '',
    },
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
        if (this.shortcodes && this.shortcodes[index]) {
          elements.push(this.parseShortcode(this.shortcodes[index]))
        }
      })
      return elements
    },
  },
  methods: {
    parseShortcode(shortcode) {
      // shortcode format: {{ component='name' prop-name='value' this='something' }}
      let matches = shortcode.matchAll(/([\w-]+)=['"](.*?)['"][\s}]/gs)

      let props = {}
      for (const match of matches) {
        //match[1] is prop name match[2] is value
        props[match[1]] = match[2]
      }
      if (
        typeof props.component == 'undefined' ||
        typeof this.$options.components[props.component] == 'undefined'
      ) {
        return {
          key: this.generateKey(),
          component: 'badComponent',
          shortcode: shortcode,
        }
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
