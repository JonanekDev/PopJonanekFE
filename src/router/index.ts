import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PopUpRegister from '../components/popup/PopupRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/register',
      name: 'regster',
      component: PopUpRegister
    }
  ]
})

export default router
