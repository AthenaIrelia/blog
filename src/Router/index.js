import Vue from 'vue'
import Router from 'vue-router'
import About from 'components/About/About.vue'
import Archives from 'components/Archives/Archives.vue'
import Home from 'components/Home/Home.vue'
import Links from 'components/Links/Links.vue'
import Search from 'components/Search/Search.vue'

Vue.use(Router)

export default new Router({
    routes: [ 
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/Archives',
            component: Archives
        },
        {
            path: '/Links',
            component: Links
        },
        {
            path: '/Search',
            component: Search
        },
    ]
})



