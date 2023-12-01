<template>
  <h3>命名式</h3>
  <demo-block height="160">
    <template #main>
      <rt-icon name="distribute" />
      <rt-icon name="not-handled" />
      <rt-icon name="task-distribution" />
    </template>
    <template #codes>
      <pre v-highlightjs>
          <code class="html">{{ codehtml }}</code>
        </pre>
    </template>
  </demo-block>
</template>

<script lang="ts" setup>


</script>

<style>
h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}
</style>