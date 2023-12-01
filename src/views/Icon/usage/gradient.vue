<template>
  <h3>渐变色</h3>
  <demo-block :code="code">
    <template #main>
      <rticon-add-item size="60" :gradient-position="['100%', '100%', '0%', '0%']"
        :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />
      <rticon-escalation size="60" :gradient-position="['100%', '100%', '0%', '0%']"
        :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />
    </template>
  </demo-block>
</template>

<script lang="ts" setup>

const code = `<rticon-add-item size="60" :gradient-position="['100%', '100%', '0%', '0%']"
          :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />
          
<rticon-escalation size="60" :gradient-position="['100%', '100%', '0%', '0%']"
          :linear-gradient="[['0%', 'rgb(255, 255, 0)'], ['50%', 'rgb(255, 0, 0)'], ['100%', 'rgb(0, 0, 0)']]" />`
</script>

<style scoped>
h2,
h3 {
  margin-bottom: 1em;
}
</style>