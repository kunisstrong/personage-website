import {createApp} from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from "@/router"
// 显示markdown文件
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// 引入所有svg图标
import 'virtual:svg-icons-register'
// 图标组件
import svgIcon from "@/components/SvgIcon/index.vue"

// v-md-editor配置
VMdPreview.use(vuepressTheme, {
    config: {
        toc: {
            includeLevel: [3, 4],
        },
    },
})
const app = createApp(App)
app.use(router)
app.use(VMdPreview)
app.component('svg-icon', svgIcon)


// 挂载容器
app.mount('#app')
