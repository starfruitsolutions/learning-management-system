// mixins
import validationRules from '@/mixins/validationRules'

// components
const components = import.meta.globEager('/src/components/global/*.vue')

export function registerGlobalComponents (app) {
  Object.entries(components).forEach(([path, definition]) => {
    // Get name of component, based on filename
    // "./components/Fruits.vue" will become "Fruits"
    const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  
    // Register component on this Vue instance
    app.component(componentName, definition.default)

  })

  app.mixin(validationRules)
}

// mixins
//Vue.mixin(validationRules)
