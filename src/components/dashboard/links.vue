<template>
  <v-card width="100%" class="pa-7">
    <template #text>
      <v-row justify="space-between" >    
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
    </template>
  </v-card>  
</template>

<script>
import config from '@/config'

export default {
  data() {
    return {
      config,
    }
  },
}
</script>

<style lang="scss" scoped></style>
