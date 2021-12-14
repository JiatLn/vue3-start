<template>
  <div class="app-container">
    <el-upload
      class="upload-json"
      drag
      action=""
      multiple
      :limit="1"
      accept=".json"
      :on-change="onChangeHandle"
      :auto-upload="false"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or
        <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip text-center">* 只能上传yyx导出的Json文件</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
  import useHeroEquipStore from '@/store/modules/useHeroEquipStore';
  import { UploadFilled } from '@element-plus/icons';
  import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const heroEquipStore = useHeroEquipStore();

  const onChangeHandle = (file: UploadFile) => {
    const reader = new FileReader();
    reader.readAsText(file.raw);
    reader.onload = () => {
      if (reader.result) {
        const yyxJson = JSON.parse(reader.result as string);
        let heroEquips = yyxJson.data.hero_equips;
        heroEquipStore.loadHeroEquipData(heroEquips);
        router.push({
          name: 'Front',
        });
      }
    };
  };
  const router = useRouter();

  onMounted(() => {
    if (heroEquipStore.hasHeroEquipData()) {
      router.push({
        name: 'Front',
      });
    }
  });
</script>

<style lang="scss" scoped>
  .app-container {
    @apply w-full h-full flex flex-col justify-center items-center;
  }
</style>
