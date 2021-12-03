<template>
  <el-container class="app-container">
    <el-aside width="200px" class="left-aside">Aside</el-aside>
    <el-container class="right-warpper">
      <el-header class="header">Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .app-container {
    @apply h-full;
    .left-aside {
      @apply bg-gray-200;
    }
    .right-warpper {
      @apply flex-1;
      .header {
        @apply bg-blue-200 flex justify-between items-center;
      }
    }
  }
</style>
