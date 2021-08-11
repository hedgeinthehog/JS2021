import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Students from '../views/Students.vue'
import Student from '../views/Student.vue'
import ErrorPage from '../views/ErrorPage.vue'
import StudentForm from '../views/StudentForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },    
  {
    path: '/students/edit/:id?',
    name: 'StudentForm',
    component: StudentForm
  },
  {
    path: '/students/:id',
    name: 'Student',
    component: Student
  },
  {
    path: '/students',
    name: 'Students',
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
