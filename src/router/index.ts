import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/blog',
        component: () => import('@/view/Blog/index.vue')
    }
]

// 设置配置项
const router = createRouter(({
    history: createWebHashHistory(),
    routes: routes
}))
export default router
