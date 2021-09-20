import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import(/* webpackChunkName: "ingreso" */ '../views/Ingreso.vue')
  },
  {
    path: '/cuadrocotiza',
    name: 'CuadroCotiza',
    component: () => import(/* webpackChunkName: "cuadro" */ '../components/CuadroCotizacion.vue')
  },
  {
    path: '/cuadroapu',
    name: 'APU',
    component: () => import(/* webpackChunkName: "APU" */ '../views/APU.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
