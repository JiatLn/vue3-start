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
        path: '/filter',
        name: 'EquipFilter',
        component: () => import('@/pages/Front/EquipFilter.vue'),
      },
    ],
  },
];

export default routes;
