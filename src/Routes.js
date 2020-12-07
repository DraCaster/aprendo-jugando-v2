import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Menu from './pages/Menu/Menu'
import Activities from './pages/Activities/Activities'
import About from './pages/About/About'
import gameRoutes from './pages/games/router'

const routes = [
    {name: "home", path: '/', component: Menu},
    {name: "activities", path: '/activities', component: Activities},
    {name: "about", path: '/about', component: About},
]

const routesMerge = [...routes, ...gameRoutes]

const router = new VueRouter({
    mode: 'history',
    routes: routesMerge
})


export default router