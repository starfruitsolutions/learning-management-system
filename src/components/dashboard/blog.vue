<template>
  <blog-card
    :id="blogStore.newestBlog.id"
    :title="blogStore.newestBlog.title"
    :categories="blogStore.newestBlog.categories"
    :image="blogStore.newestBlog.image"
    :description="blogStore.newestBlog.description"
  />
</template>

<script>
import { asset } from '@/stores/pocketbase'
import { mapStores } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import blogCard from '@/components/cards/blog.vue'

export default {
  components: {
    blogCard,
  },
  computed: {
    ...mapStores(useBlogStore),
    image() {
      return asset(
        'blogs',
        this.blogStore.newestBlog.id,
        this.blogStore.newestBlog.image
      )
    },
  },
  async mounted() {
    await this.blogStore.getNewestBlog()
  },
  methods: {
    asset,
  },
}
</script>
