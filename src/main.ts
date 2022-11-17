import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey(`${import.meta.env.VITE_APP_AG_GRID_KEY}`)


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
