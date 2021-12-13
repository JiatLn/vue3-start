import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Front',
    component: () => import('@/pages/Front.vue'),
    redirect: {
      name: 'EquipList',
    },
    children: [
      {
        path: '/list',
        name: 'EquipList',
        component: () => import('@/pages/Front/EquipList.vue'),
      },
      {
        path: '/analysis',
        name: 'Analysis',
        component: () => import('@/pages/Front/Analysis.vue'),
      },
    ],
  },
];

export default routes;
