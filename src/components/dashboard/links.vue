<template>
  <header-card header="Social Links">
    <v-container>
      <v-row justify="space-between" class="px-2">
        <v-btn
          :href="config.FACEBOOK_URL"
          target="_blank"
          icon="fa-brands fa-facebook-f"
          size="large"
          color="deep-purple"
        />
        <v-btn
          :href="config.TWITTER_URL"
          target="_blank"
          icon="fa-brands fa-twitter"
          size="large"
          color="deep-purple"
        />
        <v-btn
          :href="config.DISCORD_URL"
          target="_blank"
          icon="fa-brands fa-discord"
          size="large"
          color="deep-purple"
        />
      </v-row>
    </v-container>
  </header-card>
</template>

<script>
import headerCard from '@/components/cards/header.vue'
import config from '@/config'

export default {
  components: {
    headerCard,
  },
  data() {
    return {
      config,
    }
  },
}
</script>

<style lang="scss" scoped></style>
