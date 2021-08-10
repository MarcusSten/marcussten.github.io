import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../pages/PageDashboard'
import PageAbout from '../pages/PageAbout'
import Page404 from '../pages/Page404'
import Login from '../pages/Login'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PageDashboard,
            name: 'Dashboard'
        },
        {
            path: '/dashboard',
            component: PageDashboard,
            name: 'Dashboard'
        },
        {
            path: '/dashboard/:page',
            component: PageDashboard,
            name: 'Dashboard'
        },
        {
            path: '/about*',
            component: PageAbout,
            name: 'About'
        },
        {
            path: '/404',
            component: Page404,
            name: '404'
        },
        {
            path: '/auth',
            component: Login,
            name: 'login'
        },
        {
            path: "*",
            component: Page404
        },
        {
            path: "/add/payment/Food?value=200",
            component: PageDashboard,
            name: 'Dashboard',
            beforeEnter: (to) => {
                const date = new Date();
                console.log('Date: ' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' / category: ' + to.path.split('/').[3] + ' / Value: ' + to.fullPath.split('=').[1])
            }
        }
    ]
})

const isAuth = true

router.beforeEach((to,from, next)=>{
    if(to.name !== 'login' && !isAuth) {
        next({name: 'login'})
    }else {
        next()
    }
})

const getTitleByRouteName = routeName => {
    return {
        'Dashboard': 'Page Dashboard',
        'About': 'Page About',
        '404': ' Not Found !! =:('
    }[routeName]
}

router.afterEach((to)=>{
    document.title = getTitleByRouteName(to.name);
})

export default router