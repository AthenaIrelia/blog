import Vue from 'vue'
import Router from 'vue-router'
import About from 'components/About/About.vue'
import Archives from 'components/Archives/Archives.vue'
import Home from 'components/Home/Home.vue'
import Links from 'components/Links/Links.vue'
import Music from 'components/Music/Music.vue'
import Login from 'components/Login/Login.vue'
import Admin from 'components/Admin/Admin.vue'
import Essay from 'base/essay/essay.vue'
import FriendshipLink from 'base/friendshipLink/friendshipLink.vue'
import HomePage from 'base/homePage/homePage.vue'
import Add from 'base/add/add.vue'

Vue.use(Router)

export default new Router({
    routes: [{
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
            path: '/Music',
            component: Music
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/Admin',
            component: Admin,
            children: [{
                    path: '/',
                    redirect: 'HomePage'
                }, {
                    path: "Essay",
                    component: Essay,
                },
                {
                    path: "FriendshipLink",
                    component: FriendshipLink
                },
                {
                    path: "HomePage",
                    component: HomePage
                },
                {
                    path: "Add",
                    component: Add
                }
            ]
        }
    ]
})