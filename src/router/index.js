import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLayout from '@/views/layout'
import TheIviewComponentList from '@/views/iview_component/components/list'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: TheLayout,
    children: [{
        path: '/iview_component',
        name: 'iview_component_list',
        component: TheIviewComponentList,
    }]
}]

const router = new VueRouter({
    routes
})

export default router