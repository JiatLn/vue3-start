import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '@purge-icons/generated';

import '@/assets/styles/app.scss';
import '@/assets/styles/_global.scss';

const app = createApp(App);
app.use(router).use(createPinia());
app.mount('#app');
