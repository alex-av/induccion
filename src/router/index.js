import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/ia-view-home/ia-view-home.vue'
import Course from '../components/ia-view-course/ia-view-course.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/course',
        name: 'course',
        component: Course
    }
]

const router = new VueRouter({
    //mode: 'history',
    base:'/aula/dist/',
    //base: process.env.BASE_URL,
    routes
})

export default router
