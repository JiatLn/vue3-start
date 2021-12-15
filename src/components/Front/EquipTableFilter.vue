<template>
  <el-form ref="refForm" :inline="true" :model="filterForm" class="mt-3">
    <el-form-item label="二件套加成" prop="suitType">
      <el-select
        v-model="filterForm.suitType"
        style="width: 120px"
        placeholder="可以搜索筽~"
        filterable
        clearable
      >
        <el-option
          v-for="(item, i) in suitTypeOpts"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="御魂类型" prop="suitId">
      <el-select
        v-model="filterForm.suitId"
        style="width: 120px"
        placeholder="可以搜索筽~"
        filterable
        clearable
      >
        <el-option
          v-for="(item, i) in suitOpts"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="位置" prop="pos">
      <el-select
        v-model="filterForm.pos"
        style="width: 120px"
        placeholder="可以搜索筽~"
        filterable
        clearable
      >
        <el-option
          v-for="(item, i) in posOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="主属性" prop="mainAttr">
      <el-select
        v-model="filterForm.mainAttr"
        style="width: 120px"
        placeholder="可以搜索筽~"
        filterable
        clearable
      >
        <el-option
          v-for="(item, i) in mainAttrOpts"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="副属性" prop="randomAttrs">
      <el-select
        v-model="filterForm.randomAttrs"
        style="width: 380px"
        multiple
        :multiple-limit="4"
        placeholder="可以搜索筽~"
        filterable
        clearable
      >
        <el-option
          v-for="(item, i) in randomAttrOpts"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="星级" prop="quality">
      <el-select
        v-model="filterForm.quality"
        style="width: 120px"
        placeholder="可以搜索筽~"
        filterable
        clearable
      >
        <el-option
          v-for="(item, i) in starOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="等级" prop="level">
      <el-select
        v-model="filterForm.level"
        style="width: 120px"
        placeholder="可以搜索筽~"
        filterable
        clearable
      >
        <el-option
          v-for="(item, i) in levelOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onReset">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
  import { mainAttrOpts, randomAttrOpts, suitOpts, suitTypeOpts } from '@/assets/data/yuhunInfo';
  import type { IEquipFilterParams } from '@/hooks/types';
  import { ref, watch } from 'vue';

  const emits = defineEmits(['onFilter']);

  const refForm = ref<any>(null);

  const posOptions = [
    {
      label: '一号位',
      value: 0,
    },
    {
      label: '二号位',
      value: 1,
    },
    {
      label: '三号位',
      value: 2,
    },
    {
      label: '四号位',
      value: 3,
    },
    {
      label: '五号位',
      value: 4,
    },
    {
      label: '六号位',
      value: 5,
    },
  ];

  const starOptions = [
    {
      label: '六星',
      value: 6,
    },
    {
      label: '五星',
      value: 5,
    },
    {
      label: '四星',
      value: 4,
    },
  ];

  const levelOptions = [
    {
      label: '+15',
      value: 15,
    },
    {
      label: '+12',
      value: 12,
    },
    {
      label: '+9',
      value: 9,
    },
    {
      label: '+6',
      value: 6,
    },
    {
      label: '+3',
      value: 3,
    },
    {
      label: '未强化',
      value: 0,
    },
  ];

  const filterForm = ref<Partial<IEquipFilterParams>>({
    page: 1,
    pos: undefined,
    suitId: undefined,
    quality: undefined,
    level: undefined,
    mainAttr: undefined,
    suitType: undefined,
    randomAttrs: [],
  });

  watch(
    () => filterForm,
    () => {
      emits('onFilter', filterForm.value);
    },
    { deep: true }
  );

  const onReset = () => {
    refForm.value.resetFields();
    emits('onFilter', filterForm.value);
  };
</script>

<style lang="scss" scoped></style>
