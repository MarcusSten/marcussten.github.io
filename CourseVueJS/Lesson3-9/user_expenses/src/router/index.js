import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ()=>import(/* webpackChunkName:"Login" */'../pages/PageDashboard'),
            name: 'Dashboard'
        },
        {
            path: '/dashboard',
            component: ()=>import(/* webpackChunkName:"PageDashboard" */'../pages/PageDashboard'),
            name: 'Dashboard'
        },
        {
            path: '/add/payment/:category/',
            component: ()=>import(/* webpackChunkName:"AddPaymentFromUrl" */'../components/AddPaymentForm'),
            name: 'AddPaymentFromUrl'
        },
        {
            path: '/dashboard/:page',
            component: ()=>import(/* webpackChunkName:"PageDashboard" */'../pages/PageDashboard'),
            name: 'Dashboard'
        },
        {
            path: '/about*',
            component: ()=>import(/* webpackChunkName:"PageAbout" */'../pages/PageAbout'),
            name: 'About'
        },
        {
            path: '/404',
            component: ()=>import(/* webpackChunkName:"Page404" */'../pages/Page404'),
            name: '404'
        },
        {
            path: "*",
            component: ()=>import(/* webpackChunkName:"Page404" */'../pages/Page404'),
        }
    ]
})

const getTitleByRouteName = routeName => {
    return {
        'Dashboard': 'Page Dashboard',
        'About': 'Page About',
        '404': 'Not Found !! =:(',
        'calc': 'Calculator'
    }[routeName]
}

router.afterEach((to)=>{
    document.title = getTitleByRouteName(to.name)
})

export default router