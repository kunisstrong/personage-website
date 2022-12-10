import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/layout/index.vue')
    },
    {
        path: '/blog',
        name: '博客平台',
        redirect: 'blogAbout',
        component: () => import('@/view/Blog/index.vue'),
        children: [
            {
                path: '/allEssay',
                name: 'allEssay',
                component: () => import('@/view/Blog/AllEssay.vue'),
            },
            {
                path: '/categories',
                name: 'categories',
                component: () => import('@/view/Blog/Categories.vue'),
            },
            {
                path: '/tags',
                name: 'tags',
                component: () => import('@/view/Blog/Tags.vue'),
            },
            {
                path: '/blogAbout',
                name: 'blogAbout',
                component: () => import('@/view/Blog/BlogAbout.vue'),
            }
        ]
    },
    {
        path: '/about',
        name: '个人介绍',
        component: () => import('@/view/About/index.vue')
    }
]

// 设置配置项
const router = createRouter(({
    history: createWebHashHistory(),
    routes: routes
}))
export default router
