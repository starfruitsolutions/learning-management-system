<template>
  <v-row>
    <v-col v-for="subscription in subscriptions" :key="subscription.name" class="ma-5">
      <v-card class="pa-15">
        <v-card-title>
          <h1>{{ subscription.name }}</h1>
        </v-card-title>
        <v-list class="my-10">
          <v-list-item
            v-for="feature in subscription.features"
            :key="feature"
            :title="feature"
            prepend-icon="fa-regular fa-star"
          />
        </v-list>
        <v-card-item>
          <v-btn size="large" color="deep-purple-darken-2" block>
            <v-icon icon="fa-solid fa-dollar-sign" size="x-small" />{{
              subscription.price
            }}/month
          </v-btn>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      subscriptions: [
        {
          name: 'Basic',
          features: ['feature 1', 'feature 2'],
          price: '9.99',
        },
        {
          name: 'Premium',
          features: ['feature 3', 'feature 4'],
          price: '14.99',
        },
        {
          name: 'Pro',
          features: ['feature 5', 'feature 6'],
          price: '19.99',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
