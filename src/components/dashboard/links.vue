<template>
  <v-card width="100%" class="pa-7">
    <template #text>
      <v-row justify="space-between" >    
        <v-btn
          icon="fa-brands fa-facebook-f"
          size="large"
          color="deep-purple"
        />
        <v-btn
            icon="fa-brands fa-twitter"
            size="large"
            color="deep-purple"
        />
        <v-btn
            icon="fa-brands fa-discord"
            size="large"
            color="deep-purple"
        />
      </v-row>    
    </template>
  </v-card>  
</template>

<script>
import listCard from '@/components/cards/list.vue'

export default {
  components: {
    listCard,
  },
}
</script>

<style lang="scss" scoped></style>
