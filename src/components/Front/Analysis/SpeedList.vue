<template>
  <ul class="flex gap-4">
    <li>
      <el-tag type="danger">
        {{ roundWithDigit(props.firstSpeed, 4) }}
      </el-tag>
    </li>
    <li v-for="(item, i) in props.equipList" :key="i">
      <el-popover placement="bottom" title="" trigger="hover" :width="260">
        <template #reference>
          <el-tag>
            {{ roundWithDigit(getRandomVal(item), 4) }}
          </el-tag>
        </template>
        <EquipItem :equip="item" :show-digit="false"></EquipItem>
      </el-popover>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { getRandomVal } from '@/hooks/useAnalysis';
  import type { IHeroEquip } from '@/store/modules/types';
  import EquipItem from '@/components/Front/EquipItem.vue';
  import { roundWithDigit } from '@/utils/math';

  const props = defineProps<{
    equipList: IHeroEquip[];
    firstSpeed: number;
  }>();
</script>

<style scoped></style>
