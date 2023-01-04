<template>
  <component v-for="element in elements" :is="element.component" :key="element.key" v-bind="element"></component>
</template>

<script>
import youtubePlayer from '@/components/youtubePlayer.vue'
import asciiCinemaPlayer from '@/components/asciiCinemaPlayer.vue'
import markdown from '@/components/markdown.vue'

export default{
    props: ['src'],
    components: {
        youtube: youtubePlayer,
        asciiCinema: asciiCinemaPlayer,
        markdown
    },
    data() {
        return {
        count: 0
        }
    },
    computed: {
        markdown(){
            return this.src.split(/{{.*}}/g)
        },
        shortcodes(){
            let regex = /{{.*}}/g
            return[...this.src.match(regex)]
        },
        elements(){
            let elements = []
            try {
                this.markdown.forEach((element, index) =>{
                    if(element){
                        elements.push({
                            key: this.count,
                            component: 'markdown',
                            src: element
                        })
                        this.count++
                    }
                    if(this.shortcodes[index]){
                        elements.push(this.parseShortcode(this.shortcodes[index]))
                        this.count++
                    }
                })
            }
            catch (err){
            }
            return elements
        },
    },
    methods: {
        parseShortcode(shortcode){
            let split = shortcode.match(/[^{}\s]+/g)

            let props = {}
            split.forEach(prop =>{
                let pieces = prop.split(/=?['"]/)
                props[pieces[0]] = pieces[1]
            })
            return {
                key: this.count,
                ...props
            }
            this.count++
        }
    }
}
</script>