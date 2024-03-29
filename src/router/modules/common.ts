import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    name: 'UploadData',
    path: '/upload',
    component: () => import('@/pages/UploadData.vue'),
  },
];

export default routes;
