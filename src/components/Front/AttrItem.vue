<template>
  <span>{{ getAttrValueWithFmt(randomAttrs, type, digit) }}</span>
  <el-tag
    v-if="showTag && times > 0"
    size="mini"
    class="ml-2"
    effect="dark"
    :type="times === 6 ? 'danger' : ''"
  >
    {{ times }}
  </el-tag>
</template>

<script setup lang="ts">
  import type { IYhAttr } from '@/store/modules/types';
  import type { EAttrType } from '@/utils/types';
  import { computed } from 'vue';
  import { calcEffectiveTimes, getAttrValueWithFmt } from '@/utils/equip';

  const props = defineProps<{
    showTag: Boolean;
    type: EAttrType;
    randomAttrs: IYhAttr[];
    showDigit: Boolean;
  }>();

  const digit = computed(() => {
    return props.showDigit ? 4 : 0;
  });

  const times = computed(() => {
    return calcEffectiveTimes(props.randomAttrs, props.type);
  });
</script>

<style scoped></style>
