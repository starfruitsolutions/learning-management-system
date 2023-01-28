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
      <v-img
        :src="image"
        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(53, 11, 92, 1)"
        height="400"
        cover
        class="align-end px-15"
      >
        <h1>{{ blogStore.blog.title }}</h1>
        <p>{{ blogStore.blog.created }}</p>
      </v-img>
      <blog-content :src="blogStore.blog.content" />
    </v-card>
  </v-row>
</template>

<script>
import { asset } from '@/stores/pocketbase'
import { mapStores } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import blogCard from '@/components/cards/blog.vue'
import blogContent from '@/components/course/content.vue'

export default {
  components: {
    blogCard,
    blogContent,
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
