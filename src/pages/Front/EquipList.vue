<template>
  <div class="page-body__top px-4 flex items-center gap-10">
    <EquipTableFilter @on-filter="onFilter"></EquipTableFilter>
    <div class="div">
      <el-checkbox v-model="showDigit" label="显示小数点"></el-checkbox>
      <el-checkbox v-model="showTag" label="显示收益次数"></el-checkbox>
    </div>
  </div>
  <EquipTable :equip-list="equipList" :show-digit="showDigit" :show-tag="showTag"></EquipTable>
  <el-pagination
    layout="prev, pager, next"
    hide-on-single-page
    :total="total"
    :page-size="params.size"
    :current-page="params.page"
    @current-change="changeHandle"
  ></el-pagination>
</template>

<script setup lang="ts">
  import type { IEquipFilterParams } from '@/hooks/types';
  import { ref, onMounted } from 'vue';
  import { useHeroEquip } from '@/hooks/useHeroEquip';
  import EquipTable from '@/components/Front/EquipTable.vue';
  import EquipTableFilter from '@/components/Front/EquipTableFilter.vue';

  const showDigit = ref<Boolean>(false);
  const showTag = ref<Boolean>(false);

  const { total, equipList, getEquipList, params } = useHeroEquip(10);

  onMounted(() => {
    getEquipList();
  });

  const changeHandle = (n: number) => {
    getEquipList({ page: n });
  };

  const onFilter = (params: Partial<IEquipFilterParams>) => {
    getEquipList(params);
  };
</script>

<style scoped></style>
