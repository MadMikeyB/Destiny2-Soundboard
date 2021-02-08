import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Page/Home'
// Soundboards
import Calus from './components/Soundboards/Calus'
import Cayde from './components/Soundboards/Cayde'
import CryptAI from './components/Soundboards/CryptAI'
import Drifter from './components/Soundboards/Drifter'
import Eramis from './components/Soundboards/Eramis'
import Eris from './components/Soundboards/Eris'
import Failsafe from './components/Soundboards/Failsafe'
import Ghaul from './components/Soundboards/Ghaul'
import Ikora from './components/Soundboards/Ikora'
import Saint14 from './components/Soundboards/Saint-14'
import Saladin from './components/Soundboards/Saladin'
import Shaxx from './components/Soundboards/Shaxx'
import TheCrow from './components/Soundboards/TheCrow'
import Zavala from './components/Soundboards/Zavala'

// Fallback page
import PageNotFound from './components/Page/PageNotFound'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home
        },
        {
            path: '/soundboards',
            name: 'soundboards.index',
            component: Home
        },
        {
            path: '/soundboards/calus',
            name: 'calus',
            component: Calus
        },
        {
            path: '/soundboards/cayde',
            name: 'cayde',
            component: Cayde
        },
        {
            path: '/soundboards/crypt-ai',
            name: 'cryptai',
            component: CryptAI
        },
        {
            path: '/soundboards/drifter',
            name: 'drifter',
            component: Drifter
        },
        {
            path: '/soundboards/eramis',
            name: 'eramis',
            component: Eramis
        },
        {
            path: '/soundboards/eris',
            name: 'eris',
            component: Eris
        },
        {
            path: '/soundboards/failsafe',
            name: 'failsafe',
            component: Failsafe
        },
        {
            path: '/soundboards/ghaul',
            name: 'ghaul',
            component: Ghaul
        },
        {
            path: '/soundboards/ikora',
            name: 'ikora',
            component: Ikora
        },
        {
            path: '/soundboards/saint-14',
            name: 'saint14',
            component: Saint14
        },
        {
            path: '/soundboards/saladin',
            name: 'saladin',
            component: Saladin
        },
        {
            path: '/soundboards/shaxx',
            name: 'shaxx',
            component: Shaxx
        },
        {
            path: '/soundboards/crow',
            name: 'crow',
            component: TheCrow
        },
        {
            path: '/soundboards/zavala',
            name: 'zavala',
            component: Zavala
        },
        // 404
        {
            path: '**',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
