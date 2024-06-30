import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PopUpRegister from '../components/popup/PopupRegister.vue';
import PopUpLogin from '../components/popup/PopupLogin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },
    {
      path: '/popup/register',
      name: 'register',
      component: PopUpRegister,
    },
    {
      path: '/popup/login',
      name: 'login',
      component: PopUpLogin,
    },
  ],
});

export default router;
