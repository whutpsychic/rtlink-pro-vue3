<template>
  <TopBar />
  <RouterView />
</template>

<script lang="ts" setup>
import TopBar from '@/components/TopBar/main.vue'
import { RouterView } from 'vue-router'
</script>
