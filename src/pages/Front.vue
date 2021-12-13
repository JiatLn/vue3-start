<template>
  <div class="app-container">
    <div class="page-header">
      <div class="page-header__left">御魂Show</div>
      <div class="page-header__right">
        <el-button type="primary" @click="onClear">清空本地数据</el-button>
      </div>
    </div>
    <div class="page-body">
      <el-menu
        :default-active="activeIndex"
        class="w-full"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="EquipList" :route="{ name: 'EquipList' }">御魂列表</el-menu-item>
        <el-menu-item index="Analysis" :route="{ name: 'Analysis' }">分析</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import useHeroEquipStore from '@/store/modules/useHeroEquipStore';
  import { ElMessageBox, ElMessage } from 'element-plus';
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';

  const heroEquipStore = useHeroEquipStore();
  const router = useRouter();

  const activeIndex = ref('');
  const handleSelect = (key: string) => {
    activeIndex.value = key;
  };

  onMounted(() => {
    if (!heroEquipStore.hasHeroEquipData()) {
      router.push({
        name: 'UploadData',
      });
    }
    activeIndex.value = router.currentRoute.value.name as string;
  });

  const onClear = () => {
    ElMessageBox.confirm('确定要清空本地的json数据吗', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    })
      .then(() => {
        heroEquipStore.clearEquipData();
        router.push({
          name: 'UploadData',
        });
        ElMessage({
          type: 'success',
          message: 'Delete completed',
        });
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        });
      });
  };
</script>

<style lang="scss" scoped>
  .app-container {
    @apply w-full h-full;
    .page-header {
      @apply flex justify-between items-center h-16 w-full px-4 bg-red-400;
      .page-header__left {
        @apply flex justify-center items-center text-white font-bold;
      }
    }
    .page-body {
      @apply flex flex-col justify-center items-center;
      .ef-times {
        color: #1890ff;
        @apply ml-4;
      }
    }
  }
</style>
