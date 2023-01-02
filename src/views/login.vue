<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-card class="pa-10">
          <template v-slot:header>Login</template>
          <v-container>
            <v-alert v-if="error" type="error" class="mb-5">
              {{ error }}
            </v-alert>
            <v-form ref="form" v-model="valid" @submit.prevent="submit">
              <v-text-field
                v-model="form.email"
                :rules="[validationRules.email]"
                label="Email"
                autocomplete="username"
                prepend-icon="fas fa-envelope"
              />
              <v-text-field
                v-model="form.password"
                type="password"
                :rules="[validationRules.required]"
                label="Password"
                autocomplete="current-password"
                prepend-icon="fas fa-unlock-alt"
              />
              <v-btn @click="submit" :disabled="!valid" block> Login </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { pb } from '@/stores/pocketbase'
import validationRules from '@/mixins/validationRules'
// our new component
export default {
  name: 'LoginForm',
  mixins: [validationRules],
  data() {
    return {
      valid: false,
      error: false,
      form: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    async submit() {
      try {
        await pb
          .collection('users')
          .authWithPassword(this.form.email, this.form.password)
        this.$router.push('courses')
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>
