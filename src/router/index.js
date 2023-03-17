import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'


const routes = [
  {
    path: '/', name: 'Home',component: Home
  },
  {
    path: '/about',name: 'About',component: About
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return document.getElementById('app').scrollIntoView();
    }
  }
})


export default router
