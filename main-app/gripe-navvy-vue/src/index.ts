export const microApps = [
  {
    name: 'subAppVue1',
    entry: 'http://localhost:5174',
    container: '#subapp-container',
    activeRule: '/app-vue1',
  },
  {
    name: 'subAppVue2',
    entry: 'http://localhost:5175/',
    container: '#subapp-container',
    activeRule: '/app-vue2',
  }
  ];

export const lifeCycle = {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
};