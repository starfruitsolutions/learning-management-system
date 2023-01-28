<template>
  <v-row>
    <v-col
      v-for="blog in blogStore.blogs"
      :key="blog.id"
      cols="6"
      class="pa-5"
    >
      <blog-card
        :id="blog.id"
        :title="blog.title"
        :categories="blog.categories"
        :image="blog.image"
        :description="blog.description"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapStores } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import blogCard from '@/components/cards/blog.vue'

export default {
  components: {
    blogCard,
  },
  computed: {
    ...mapStores(useBlogStore),
  },
  async mounted() {
    await this.blogStore.getBlogs()
  },
}
</script>

<style lang="scss" scoped></style>
