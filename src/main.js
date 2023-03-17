import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import { createHead } from '@vueuse/head'
import 'core-js/stable'; 
import 'regenerator-runtime/runtime';


const head = createHead()

createApp(App).use(router).use(head).mount('#app')
