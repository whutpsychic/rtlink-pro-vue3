<template>
  <h3>自定义尺寸、颜色</h3>
  <demo-block :code="code">
    <template #main>
      <rticon-distribute size="40" color="red" />
      <rticon-escalation size="50" color="green" />
      <rticon-fault size="60" color="#1e90ff" />
      <rticon-vue size="70" :color="['#1e90ff', 'red']" />
    </template>
  </demo-block>
</template>

<script lang="ts" setup>

const code = `<rticon-distribute size="40" color="red" />
<rticon-escalation size="50" color="green" />
<rticon-fault size="60" color="#1e90ff" />
<rticon-vue size="70" :color="['#1e90ff', 'red']" />`
</script>

<style scoped>
h2,
h3 {
  margin-bottom: 1em;
}
</style>