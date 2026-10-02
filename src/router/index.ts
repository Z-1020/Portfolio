import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/interests',
      name: 'interests',
      component: ()=> import('../views/InterestsView.vue'),
    },
    {
      path: '/it-projects',
      name: 'it-projects',
      component: ()=> import('../views/ProjectsView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: ()=> import('../views/SkillsView.vue'),
    },
  ],
})

export default router
