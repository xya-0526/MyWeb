import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@view/home/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //         // 跳转到锚点
    //         return {
    //             el: to.hash,
    //             behavior: 'smooth'
    //         }
    //     } else {
    //         return { top: 0 }
    //     }
    // }
})

export default router
