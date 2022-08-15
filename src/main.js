import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import router from './router'
import store from './store/index.js'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// npm install --save-dev @fortawesome/fontawesome-free

const app=createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
