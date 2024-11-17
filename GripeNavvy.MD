devtools 和 qiankun的加载机制存在冲突，选择禁用 devtools，想子应用加载完成之后收动加载，
```vue
  // 手动加载 Vue Devtools（只在开发环境中）, 
   if (import.meta.env.MODE === 'development' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
     // Vue Devtools 会自动注入到全局 hook 中，我们手动绑定当前应用
     window.__VUE_DEVTOOLS_GLOBAL_HOOK__.vue = app
     // 如果需要，手动启用 devtools
     app.config.devtools = true
   }
```