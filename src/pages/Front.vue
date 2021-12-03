<template>
  <div>front page</div>
  <p>{{ countStore.count }}</p>
  <button class="bg-green-400 rounded px-4 py-1 ml-2" @click="countStore.increment()">+1</button>
  <el-button type="primary">按钮</el-button>
  <app-icon-vue icon="el-search" />
</template>

<script setup lang="ts">
  import useCountStore from '@/store/modules/useCountStore';
  import AppIconVue from '@/components/common/AppIcon.vue';

  const countStore = useCountStore();

  console.log(import.meta.env.VITE_API_URL);
</script>

<style lang="scss" scoped></style>
