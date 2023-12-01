<template>
  <div class="page-container">
    <div class="main-content">
      <h2>安装</h2>
      <p>本节将介绍如何在项目中使用 rtlink-pro。</p>
      <h3>使用 npm 安装</h3>
      <highlightjs language="Javascript" :code="install" />
      <div class="spliter" />
      <!-- --------- -->
      <h3>引入组件</h3>
      <p>在 main.js 中写入以下内容：</p>
      <highlightjs language="Javascript" :code="code" />
      <div class="spliter" />
      <!-- --------- -->
      <p>以上代码便完成了 rtlink-pro 的引入。</p>
      <!-- --------- -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const install = `npm i rtlink-pro-vue3 -s`
const code = `// main.ts
import { createApp } from 'vue'
import RtlinkPro from 'rtlink-pro-vue3'

import App from './App.vue'

const app = createApp(App)

app.use(RtlinkPro)
app.mount('#app')`
const code2 = `import { rtc } from 'rtlink-core';

rtc.init();`

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