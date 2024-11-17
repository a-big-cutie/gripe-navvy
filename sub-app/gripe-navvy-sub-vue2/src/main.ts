import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/es/helper'
import App from '@/App.vue'
import app from '@/App.vue'

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log(import.meta.env.MODE)
  console.log(process.env.VITE_API_URL_LOCAL)
  if (import.meta.env.MODE === 'development') {
    console.log('当前是开发环境')
  } else if (import.meta.env.MODE === 'production') {
    console.log('当前是生产环境')
  }
  render()
}
// some code
//  https://qiankun.umijs.org/zh/guide/getting-started#1-%E5%AF%BC%E5%87%BA%E7%9B%B8%E5%BA%94%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90
renderWithQiankun({
  /**
   * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
   */
  mount(props) {
    console.log('mount')
    render(props)
  },
  /**
   * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
   * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
   */
  bootstrap() {
    console.log('bootstrap')
  },
  /**
   * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
   */
  unmount(props: any) {
    console.log('unmount')
    // const { container } = props;
    // const mountRoot = container?.querySelector('#subAppVue2');
    // ReactDOM.unmountComponentAtNode(
    //   mountRoot || document.querySelector('#subAppVue2'),
    // );
    // if (app) {
    //   app.unmount();
    //   app = null;
    //   history.destroy();
    // }
    // 手动加载 Vue Devtools（只在开发环境中）
  },
  /**
   * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
   */
  update(props) {
    console.log('微应用：update', props)
  }
})

function render(props = {}) {
  const { container } = props
  const dom = container ? container.querySelector('#subAppVue2') : '#subAppVue2'
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)


  app.mount(dom)

}
