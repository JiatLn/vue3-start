<template>
  <el-form ref="refForm" :inline="true" :model="filterForm" class="mt-3">
    <el-form-item label="御魂类型" prop="suitId">
      <el-select v-model="filterForm.suitId" placeholder="可以搜索筽~" filterable>
        <el-option
          v-for="(item, i) in suitOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="位置" prop="pos">
      <el-select v-model="filterForm.pos" placeholder="">
        <el-option
          v-for="(item, i) in posOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="主属性" prop="mainAttr">
      <el-select v-model="filterForm.mainAttr" placeholder="" clearable>
        <el-option
          v-for="(item, i) in attrOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="星级" prop="quality">
      <el-select v-model="filterForm.quality" placeholder="">
        <el-option
          v-for="(item, i) in starOptions"
          :key="i"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="等级" prop="level">
      <el-select v-model="filterForm.level" placeholder="">
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
  import { attrOptions, suitOptions as _suitOptions } from '@/assets/data/yuhunInfo';
  import { IEquipFilterParams } from '@/hooks/types';
  import { EAttrType } from '@/utils/types';
  import { ref, watch } from 'vue';

  const emits = defineEmits(['onFilter']);

  const refForm = ref<any>(null);

  const suitOptions = [
    {
      label: '全部',
      value: -1,
    },
  ].concat(..._suitOptions);

  const posOptions = [
    {
      label: '全部',
      value: -1,
    },
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
      label: '全部',
      value: -1,
    },
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
      label: '全部',
      value: -1,
    },
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
    pos: -1,
    suitId: -1,
    quality: -1,
    level: -1,
    mainAttr: undefined,
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
