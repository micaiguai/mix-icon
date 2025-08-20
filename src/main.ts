import FloatingVue from 'floating-vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import 'floating-vue/dist/style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(FloatingVue)

app.mount('#app')
