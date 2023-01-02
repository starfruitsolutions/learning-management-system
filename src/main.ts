import { createApp } from 'vue'

import App from './App.vue'

// Plugins
import vuetify from '@/plugins/vuetify'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
