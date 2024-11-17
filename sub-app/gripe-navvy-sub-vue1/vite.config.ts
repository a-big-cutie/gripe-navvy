import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import qiankun from 'vite-plugin-qiankun'
const useDevMode = true
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    qiankun('subAppVue1', {
      useDevMode: true
    }) // 这里的 'myMicroAppName' 是子应用名，主应用注册时AppName需保持一致
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // watch: { usePolling: true },
    // hmr: true,
    cors: true,
    port: 5174, // 子应用的端口号，与主应用不同
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // hmr: true, // 仅在非生产环境中启用热更新
  },
  base: '/', // 生产环境需要指定运行域名作为base
})
