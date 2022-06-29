import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView";
import ExampleView from "../views/ExampleView";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:id',
    name: 'about',
    component: AboutView
  },
  {
    path: '/example',
    name: 'example',
    component: ExampleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
