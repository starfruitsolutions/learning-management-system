import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

// Plugins
import { registerGlobalComponents } from '@/utilities/globalComponentLoader'
import vuetify from '@/plugins/vuetify'

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
