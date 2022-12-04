import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 设置别名
        alias: {
            // 用@代替src目录，com代替组件目录
            "@": path.resolve(__dirname, "src"),
        }
    },

})
