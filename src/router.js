import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './pages/Home'
import Activities from './pages/Activities'
import Game from './pages/Game'
import About from './pages/About'

const routes = [
    {name: "home", path: '/', component: Home},
    {name: "activities", path: '/activities', component: Activities},
    {name: "game", path: '/game', component: Game},
    {name: "about", path: '/about', component: About},
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})


export default router