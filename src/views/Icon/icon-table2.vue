<template>
  <div class="icon-table">

    <icon-block name="adjust" :usingNameMode="usingNameMode" des="调整"><rticon-adjust color="#233" /></icon-block>
    <icon-block name="check-item" :usingNameMode="usingNameMode" des="检查项"><rticon-check-item color="#233" /></icon-block>
    <icon-block name="configure2" :usingNameMode="usingNameMode" des="配置"><rticon-configure2 color="#233" /></icon-block>
    <icon-block name="copy" :usingNameMode="usingNameMode" des="复制"><rticon-copy color="#233" /></icon-block>
    <icon-block name="detail" :usingNameMode="usingNameMode" des="详情"><rticon-detail color="#233" /></icon-block>
    <icon-block name="disable2" :usingNameMode="usingNameMode" des="禁用"><rticon-disable2 color="#233" /></icon-block>
    <icon-block name="edit" :usingNameMode="usingNameMode" des="编辑"><rticon-edit color="#233" /></icon-block>
    <icon-block name="export2" :usingNameMode="usingNameMode" des="导出"><rticon-export2 color="#233" /></icon-block>
    <icon-block name="filling" :usingNameMode="usingNameMode" des="填报"><rticon-filling color="#233" /></icon-block>
    <icon-block name="input" :usingNameMode="usingNameMode" des="录入"><rticon-input color="#233" /></icon-block>
    <icon-block name="mate" :usingNameMode="usingNameMode" des="匹配"><rticon-mate color="#233" /></icon-block>
    <icon-block name="play" :usingNameMode="usingNameMode" des="执行"><rticon-play color="#233" /></icon-block>
    <icon-block name="print" :usingNameMode="usingNameMode" des="打印"><rticon-print color="#233" /></icon-block>
    <icon-block name="process" :usingNameMode="usingNameMode" des="进度"><rticon-process color="#233" /></icon-block>
    <icon-block name="rule" :usingNameMode="usingNameMode" des="规则"><rticon-rule color="#233" /></icon-block>
    <icon-block name="stop" :usingNameMode="usingNameMode" des="停止"><rticon-stop color="#233" /></icon-block>
    <icon-block name="upload" :usingNameMode="usingNameMode" des="上传"><rticon-upload color="#233" /></icon-block>
    <icon-block name="view" :usingNameMode="usingNameMode" des="查看"><rticon-view color="#233" /></icon-block>
    <icon-block name="view2" :usingNameMode="usingNameMode" des="预览"><rticon-view2 color="#233" /></icon-block>

    <!-- -------- -->
  </div>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue'
import IconBlock from "@/components/IconBlock/main.vue"
import { useIconMode } from '@/stores'

const iconMode = useIconMode();

const usingNameMode = computed<any>(() => {
  return unref(iconMode.mode)
})

</script>


<style scoped>
.icon-table {
  width: 876px;
  border-top: solid 1px #eee;
  border-left: solid 1px #eee;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 80px;
}
</style>