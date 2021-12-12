import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '@purge-icons/generated';

import '@/assets/styles/app.scss';
import '@/assets/styles/_global.scss';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router).use(createPinia());

app.config.globalProperties.$ELEMENT = {
  // options
  size: 'small',
};

app.mount('#app');
