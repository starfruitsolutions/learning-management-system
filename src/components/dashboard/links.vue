<template>
  <v-card width="100%">
    <text-Header> Social Links </text-Header>
    <v-card-text class="pa-9">
      <v-row justify="space-between">
        <v-btn
          :href="config.FACEBOOK_URL"
          target="_blank"
          icon="fa-brands fa-facebook-f"
          color="deep-purple"
        />
        <v-btn
          :href="config.TWITTER_URL"
          target="_blank"
          icon="fa-brands fa-twitter"
          color="deep-purple"
        />
        <v-btn
          :href="config.DISCORD_URL"
          target="_blank"
          icon="fa-brands fa-discord"
          color="deep-purple"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import textHeader from '@/components/cards/textHeader.vue'
import config from '@/config'

export default {
  components: {
    textHeader,
  },
  data() {
    return {
      config,
    }
  },
}
</script>

<style lang="scss" scoped></style>
