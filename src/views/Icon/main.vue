<template>
  <div class="page-container">
    <div class="main-content">
      <h2>Icon 图标</h2>
      <Named />
      <line-spliter />
      <AsComponent />
      <line-spliter />
      <ColorSize />
      <line-spliter />
      <Gradient />
      <line-spliter />
      <!-- --------------- -->
      <h2>Attributes</h2>
      <el-table :data="attrTableData" style="width: 100%">
        <el-table-column prop="arg" label="参数" width="180">
        </el-table-column>
        <el-table-column prop="des" label="说明">
        </el-table-column>
        <el-table-column prop="type" label="类型" width="150">
        </el-table-column>
        <el-table-column prop="options" label="可选值">
        </el-table-column>
        <el-table-column prop="default" label="默认值" width="100">
        </el-table-column>
      </el-table>

      <h2>图标集合</h2>
      <p>命名式 <el-switch v-model="iconMode.mode" active-color="#13ce66" inactive-color="#ff4949" @change="onChangeMode">
        </el-switch></p>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="图标合集1" name="icons1">
          <IconTable />
        </el-tab-pane>
        <el-tab-pane label="图标合集2" name="icons2">
          <IconTable2 />
        </el-tab-pane>
        <el-tab-pane label="mobile" name="icons3">
          <IconTable3 />
        </el-tab-pane>
        <el-tab-pane label="logo合集" name="icons4">
          <IconTable4 />
        </el-tab-pane>
      </el-tabs>
      <div class="designer">
        <p>designed by</p>
        <img alt="lyy" :src="lyy" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useIconMode } from '@/stores'
import Named from './usage/named.vue'
import AsComponent from './usage/component.vue'
import ColorSize from './usage/colorSize.vue'
import Gradient from './usage/gradient.vue'

import IconTable from "./icon-table.vue"
import IconTable2 from "./icon-table2.vue"
import IconTable3 from "./icon-table3.vue"
import IconTable4 from "./icon-table4.vue"
import lyy from "@/assets/personIcon-lyy.jpg"

const iconMode = useIconMode();

const activeTab = ref('icons1')

const attrTableData = [
  {
    arg: 'size',
    des: '尺寸',
    type: 'Number/String',
    options: ' — ',
    default: '30'
  },
  {
    arg: 'color',
    des: '图标颜色',
    type: 'String',
    options: ' — ',
    default: '#000'
  },
  {
    arg: 'linear-gradient',
    des: '渐变色色值及变色位置信息 [ x1, y1, x2, y2 ]',
    type: 'String[]',
    options: ' — ',
    default: ' — '
  },
  {
    arg: 'gradient-position',
    des: '渐变色点位方向信息 [ ...[ position, color ] ]',
    type: 'Array[]',
    options: ' — ',
    default: ' — '
  }
]

const onChangeMode = (mode: Boolean) => {
  iconMode.change(mode)
  console.log(iconMode.mode)
}

</script>

<style scoped>
h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}

.designer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.designer img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 10px;
}
</style>