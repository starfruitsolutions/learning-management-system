import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home.vue'),
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
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/views/pricing.vue'),
    },
    {
      path: '/mentors',
      name: 'mentors',
      component: () => import('@/views/mentors.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard.vue'),
    },
    {
      path: '/courses',
      name: 'Courses',
      component: () => import('@/views/courses.vue'),
    },
    {
      path: '/course/:id',
      name: 'Course',
      component: () => import('@/views/course.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/blogs.vue'),
    },
    {
      path: '/blog/:id',
      name: 'Blog Post',
      component: () => import('@/views/blog.vue'),
    },
  ],
})

export default router
