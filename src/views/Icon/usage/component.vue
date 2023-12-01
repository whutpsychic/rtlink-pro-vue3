<template>
  <h3>组件式</h3>
  <demo-block :code="code">
    <template #main>
      <rticon-distribute />
      <rticon-not-handled />
      <rticon-task-distribution />
    </template>
  </demo-block>
</template>

<script lang="ts" setup>

const code = `<rticon-distribute />
<rticon-not-handled />
<rticon-task-distribution />`
</script>

<style scoped>
h2,
h3 {
  margin-bottom: 1em;
}
</style>