<template>
  <main>
    <div class="left-menu-can">
      <el-menu :default-active="state.defaultActiveName" @select="onSelectMenu">
        <el-menu-item-group class="item-group" title="快速开始">
          <el-menu-item class="el-item-bar" index="install">安装</el-menu-item>
          <el-menu-item class="el-item-bar" index="useIcon">使用图标</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="right-content-can">
      <div class="page-container">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter();

const state = reactive({
  defaultActiveName: 'install'
})

const onSelectMenu = (menu: string, paths: Array<any>) => {
  console.log('onselect')
  router.push(`/guide/${paths.join('/')}`)
}

</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}

.left-menu-can {
  width: 280px;
  flex-basis: 280px;
}

.right-content-can {
  width: calc(100vw - 280px);
  flex-basis: calc(100vw - 280px);
}

h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}

.el-item-bar {
  text-indent: 2em;
}
</style>