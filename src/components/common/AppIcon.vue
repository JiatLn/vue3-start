<template>
  <span class="iconify" :data-icon="props.icon"></span>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    icon: String;
  }>();
</script>

<style lang="scss" scoped></style>
