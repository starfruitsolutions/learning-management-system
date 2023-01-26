<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 lg4>
        <Card>
          <template #header>Sign Up</template>
          <v-container>
            <v-form ref="form" v-model="valid" @submit.prevent="submit">
              <v-text-field
                v-model="form.email"
                :rules="[validationRules.email]"
                label="Email"
                autocomplete="username"
                prepend-icon="fa-envelope"
              />
              <v-text-field
                v-model="form.name"
                :rules="[validationRules.required]"
                label="Name"
                autocomplete="display name"
                prepend-icon="fa-user"
              />
              <v-text-field
                v-model="form.displayName"
                :rules="[validationRules.required]"
                label="Display Name"
                autocomplete="display name"
                prepend-icon="fa-user-tag"
              />
              <v-text-field
                v-model="form.password"
                type="password"
                :rules="[validationRules.required]"
                label="Password"
                autocomplete="current-password"
                prepend-icon="fa-unlock-alt"
              />
              <v-btn :disabled="!valid" type="submit" class="mt-3 mb-6">
                Submit
              </v-btn>
            </v-form>
          </v-container>
        </Card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// our new component
export default {
  name: 'LoginForm',
  data() {
    return {
      valid: false,
      form: {
        email: null,
        name: null,
        displayName: null,
        password: null,
      },
    }
  },
  methods: {
    submit() {
      //this.signup(this.form).then(() => this.$router.push(this.$route.query.redirect || '/dashboard'))
    },
  },
}
</script>
