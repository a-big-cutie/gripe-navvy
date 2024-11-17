import './assets/main.css'
import {  createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/es/helper'
import App from '@/App.vue'


if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log(qiankunWindow.__POWERED_BY_QIANKUN__)
  renderWithQiankun();
} else {
  render();
}

function render(props = {}) {
  const { container } = props;
  const dom = container ? container.querySelector('#subAppVue1') : '#subAppVue1';
  const  instance = createApp(App)
  instance.use(createPinia())
  instance.use(router)
  instance.mount(dom)
}

// some code
renderWithQiankun({
  /**
   * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
   */
  mount(props) {
    console.log('mount');
    render(props);
  },
  /**
   * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
   * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
   */
  bootstrap() {
    console.log('bootstrap');
  },
  /**
   * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
   */
  unmount(props: any) {
    console.log('unmount', props);
    // instance.unmount();
    // instance._container.innerHTML = '';
    // instance = null;
    // router = null;
    // history.destroy();
  },
  /**
   * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
   */
  update(props) {
    console.log('微应用：update', props)
  }
});

