<template>
  <h3>命名式</h3>
  <demo-block :code="code">
    <template #main>
      <rt-icon name="distribute" />
      <rt-icon name="not-handled" />
      <rt-icon name="task-distribution" />
    </template>
  </demo-block>
</template>

<script lang="ts" setup>

const code = `<rt-icon name="distribute" />
<rt-icon name="not-handled" />
<rt-icon name="task-distribution" />`
</script>

<style scoped>
h2,
h3 {
  margin-bottom: 1em;
}

</style>