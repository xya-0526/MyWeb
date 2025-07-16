import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: () => import('@/view/myHome.vue'),
            children: [
                {
                    path: '',
                    component: () => import('@/view/myList.vue')
                }
            ]
        }
    ]
})

export default router
