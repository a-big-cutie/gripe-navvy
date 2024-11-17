import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig((({ mode }) => {
  // 加载当前环境的环境变量
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue(),
      vueJsx(),
      // vueDevTools(),
      qiankun('subAppVue2', {
          useDevMode: true
        }
      )
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      hmr: true,
      port: 5175,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    // 在开发环境中通过 BASE 设置不同的 public path
    base: mode === 'production' ? '/prod/' : '/',
    define: {
      // 将当前环境注入到全局环境变量中
      'process.env': {
        ...env,
        NODE_ENV: mode  // 添加 `NODE_ENV` 来区分开发和生产环境
      }
    }
  }
}))
