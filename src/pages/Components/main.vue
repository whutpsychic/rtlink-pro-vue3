<template>
  <main>
    <div class="left-menu-can">
      <el-menu :default-active="defaultActiveName" @select="onSelectMenu">
        <el-menu-item-group title="">
          <el-menu-item class="el-item-bar" :index="'icon'">Icon 图标</el-menu-item>
          <el-menu-item class="el-item-bar" :index="'formulaEditor'">FormulaEditor 公式编辑器</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="right-content-can">
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const defaultActiveName = ref('icon')

const onSelectMenu = (menu: string, paths: Array<any>) => {
  router.push(`/components/${paths.join('/')}`)
}

onMounted(() => {
  const pathArr = route.path.split('/')
  const L = pathArr.length
  const targetName = pathArr[L - 1]
  defaultActiveName.value = targetName
})


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

.el-item-bar {
  text-indent: 2em;
}
</style>