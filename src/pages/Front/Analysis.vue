<template>
  <el-descriptions title="" :column="1" border class="mt-6">
    <el-descriptions-item label="散件一速">
      <SpeedList :equip-list="sanjian.list" :first-speed="sanjian.val"></SpeedList>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>招财猫</template>
      <SpeedList :equip-list="zcm.list" :first-speed="zcm.val"></SpeedList>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>蚌精</template>
      <SpeedList :equip-list="bangjing.list" :first-speed="bangjing.val"></SpeedList>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>火灵</template>
      <SpeedList :equip-list="huoling.list" :first-speed="huoling.val"></SpeedList>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <el-select v-model="suitId" placeholder="可以搜索哦~" filterable clearable>
          <el-option
            v-for="item in suitOpts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
      <SpeedList
        v-if="suitId"
        :equip-list="otherSuit.list"
        :first-speed="otherSuit.val"
      ></SpeedList>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
  import { useAnalysis } from '@/hooks/useAnalysis';
  import type { IHeroEquip, SuitId } from '@/store/modules/types';
  import { onMounted, ref, watch } from 'vue';
  import SpeedList from '@/components/Front/Analysis/SpeedList.vue';
  import { suitOpts } from '@/assets/data/yuhunInfo';

  const { getMaxSpeed, getSuitMaxSpeed } = useAnalysis();

  const sanjian = ref({
    val: 0,
    list: [] as IHeroEquip[],
  });
  const zcm = ref({
    val: 0,
    list: [] as IHeroEquip[],
  });
  const bangjing = ref({
    val: 0,
    list: [] as IHeroEquip[],
  });
  const huoling = ref({
    val: 0,
    list: [] as IHeroEquip[],
  });
  const otherSuit = ref({
    val: 0,
    list: [] as IHeroEquip[],
  });

  const suitId = ref<SuitId | undefined>(undefined);

  onMounted(() => {
    sanjian.value = getMaxSpeed();
    zcm.value = getSuitMaxSpeed(300010);
    bangjing.value = getSuitMaxSpeed(300034);
    huoling.value = getSuitMaxSpeed(300019);
  });

  watch(
    () => suitId.value,
    (val) => {
      if (val) {
        otherSuit.value = getSuitMaxSpeed(val);
      }
    }
  );
</script>

<style lang="scss" scoped></style>
