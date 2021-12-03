import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [];

const modules = import.meta.globEager('./modules/*.ts');

for (const path in modules) {
  routes.push(...modules[path].default);
}
console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
