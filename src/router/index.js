import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Ingreso.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/presentacion',
        name: 'Presentacion',
        component: () =>
            import ( /* webpackChunkName: "ingreso" */ '../views/Presentacion.vue')
    },
    {
        path: '/cuadrocotiza',
        name: 'CuadroCotiza',
        component: () =>
            import ( /* webpackChunkName: "cuadro" */ '../views/Cuadro.vue')
    },
    {
        path: '/editarcuadro',
        name: 'EditarCuadro',
        component: () =>
            import ( /* webpackChunkName: "editarcuadro" */ '../components/EditarCotizacion.vue')
    },    
    {
        path: '/cuadroapu',
        name: 'APU',
        component: () =>
            import ( /* webpackChunkName: "APU" */ '../views/APU.vue')
    },
    {
        path: '/tabla',
        name: 'tabla',
        component: () =>
            import ( /* webpackChunkName: "tabla" */ '../views/Tabla.vue')
    },
    {
        path: '/cuadromateriales',
        name: 'Materiales',
        component: () =>
            import ( /* webpackChunkName: "materiales" */ '../views/Materiales.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router