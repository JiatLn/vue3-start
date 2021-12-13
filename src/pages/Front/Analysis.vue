<template>
  <el-descriptions title="" :column="1" border>
    <el-descriptions-item label="散件一速">
      <ul class="flex gap-4">
        <li>
          <el-tag type="danger">
            {{ roundWithDigit(maxSpeedVal, 4) }}
          </el-tag>
        </li>
        <li v-for="(item, i) in maxSpeedList" :key="i">
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
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
  import { getRandomVal, useAnalysis } from '@/hooks/useAnalysis';
  import { IHeroEquip } from '@/store/modules/types';
  import { onMounted, ref } from 'vue';
  import EquipItem from '@/components/Front/EquipItem.vue';
  import { roundWithDigit } from '@/utils/math';

  const { getMaxSpeed } = useAnalysis();

  const maxSpeedList = ref<IHeroEquip[]>([]);
  const maxSpeedVal = ref(0);

  onMounted(() => {
    const { val, list } = getMaxSpeed();
    maxSpeedList.value = list;
    maxSpeedVal.value = val;
  });
</script>

<style lang="scss" scoped></style>
