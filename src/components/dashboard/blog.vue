<template>
  <text-Header> Recent News </text-Header>
  <blog-card
    :id="blogStore.newestBlog.id"
    :title="blogStore.newestBlog.title"
    :categories="blogStore.newestBlog.categories"
    :image="blogStore.newestBlog.image"
    :description="blogStore.newestBlog.description"
    class="py-2"
  />
</template>

<script>
import { mapStores } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import textHeader from '@/components/cards/textHeader.vue'
import blogCard from '@/components/cards/blog.vue'

export default {
  components: {
    textHeader,
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
}
</script>
