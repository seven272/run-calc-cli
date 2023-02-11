import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from '@/components/UI/index.js'
import layouts from '@/layouts/index.js'

const app = createApp(App)

ui.forEach(comp => {
  return app.component(comp.name, comp)
})
layouts.forEach(comp => {
  return app.component(comp.name, comp)
})
app.use(store)
app.use(router)
app.mount('#app')
