import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun'
import { lifeCycle, microApps } from '@/index'

const app = createApp(App)

registerMicroApps(microApps, lifeCycle);
// setDefaultMountApp("/app-vue2");
start();

app.use(createPinia())
app.use(router)
app.mount('#app')

