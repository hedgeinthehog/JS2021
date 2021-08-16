import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Students from '../views/Students.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/students/:id?',
    component: Students
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
