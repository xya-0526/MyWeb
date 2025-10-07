import { createApp } from 'vue'
import '@/style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// @ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// 引入 vuepress 主题
// @ts-ignore
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// 引入代码高亮库 prismjs
import Prism from 'prismjs'
// 注册主题（必须传入 Prism）
VMdPreview.use(vuepressTheme, {
    Prism // 代码高亮
})
const app = createApp(App)
const pinia = createPinia()
app.use(VMdPreview)
app.use(router)
app.use(pinia)
app.mount('#app')
