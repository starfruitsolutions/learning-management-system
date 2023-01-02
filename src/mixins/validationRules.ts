export default {
  data () {
    return {
      validationRules: {
        required: value => !!value || 'Required.',
        email: value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(value) || 'E-mail must be valid',
        passwordLength: value => (!!value && value.length >= 10) || 'Password must be at least 10 characters'
      }
    }
  }
}
