<template>
  <v-navigation-drawer class="py-5" width="350" permanent>
    <v-row v-for="blog in blogStore.blogs" :key="blog.id" class="px-5 my-10">
      <v-col>
        <blog-card
          :id="blog.id"
          :title="blog.title"
          :categories="blog.categories"
          :image="blog.image"
          :description="blog.description"
        />
      </v-col>
    </v-row>
  </v-navigation-drawer>
  <v-row class="pa-15">
    <v-card width="90%" min-height="80vh" class="mx-auto">
      <image-header :src="image" height="400">
        <div class="px-15">
          <h1>{{ blogStore.blog.title }}</h1>
          <p>{{ blogStore.blog.created }}</p>
        </div>
      </image-header>
      <div class="py-10">
        <rendered-content :src="blogStore.blog.content" />
      </div>
    </v-card>
  </v-row>
</template>

<script>
import { asset } from '@/stores/pocketbase'
import { mapStores } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import blogCard from '@/components/cards/blog.vue'
import imageHeader from '@/components/cards/imageHeader.vue'
import renderedContent from '@/components/content/content.vue'

export default {
  components: {
    blogCard,
    imageHeader,
    renderedContent,
  },
  data() {
    return {
      currentUnit: {},
    }
  },
  computed: {
    ...mapStores(useBlogStore),
    image() {
      return asset('blogs', this.blogStore.blog.id, this.blogStore.blog.image)
    },
  },
  async mounted() {
    await this.blogStore.getBlog(this.$route.params.id)
    await this.blogStore.getBlogs()
  },
  methods: {
    asset,
  },
}
</script>
