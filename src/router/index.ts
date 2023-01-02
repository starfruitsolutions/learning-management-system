import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('@/views/home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/signup.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => null,
    },
    {
      path: '/courses',
      name: 'Courses',
      component: import('@/views/courses.vue'),
    },
    {
      path: '/course/:id',
      name: 'Course',
      component: import('@/views/course.vue'),
    },
  ],
})

export default router
