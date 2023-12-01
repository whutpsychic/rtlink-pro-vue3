<template>
  <div class="icon-table">

    <icon-block name="add-item" :usingNameMode="usingNameMode" des="新增项目"><rticon-add-item color="#233" /></icon-block>
    <icon-block name="add" :usingNameMode="usingNameMode" des="新增"><rticon-add color="#233" /></icon-block>
    <icon-block name="add-outer-sampling" :usingNameMode="usingNameMode" des="新增外来样"><rticon-add-outer-sampling
        color="#233" /></icon-block>

    <icon-block name="back" :usingNameMode="usingNameMode" des="返回"><rticon-back color="#233" /></icon-block>

    <icon-block name="calc-auto" :usingNameMode="usingNameMode" des="自动计算"><rticon-calc-auto color="#233" /></icon-block>
    <icon-block name="calc-balance" :usingNameMode="usingNameMode" des="平衡计算"><rticon-calc-balance
        color="#233" /></icon-block>
    <icon-block name="cancel" :usingNameMode="usingNameMode" des="取消"><rticon-cancel color="#233" /></icon-block>
    <icon-block name="certificate-confirm" :usingNameMode="usingNameMode" des="证件确认"><rticon-certificate-confirm
        color="#233" /></icon-block>
    <icon-block name="clear" :usingNameMode="usingNameMode" des="清除"><rticon-clear color="#233" /></icon-block>
    <icon-block name="configure" :usingNameMode="usingNameMode" des="设置"><rticon-configure color="#233" /></icon-block>
    <icon-block name="confirm" :usingNameMode="usingNameMode" des="确定"><rticon-confirm color="#233" /></icon-block>

    <icon-block name="data-collect" :usingNameMode="usingNameMode" des="数据采集"><rticon-data-collect
        color="#233" /></icon-block>
    <icon-block name="data-synchronous" :usingNameMode="usingNameMode" des="数据同步"><rticon-data-synchronous
        color="#233" /></icon-block>
    <icon-block name="defect-conversion" :usingNameMode="usingNameMode" des="转缺陷"><rticon-defect-conversion
        color="#233" /></icon-block>
    <icon-block name="delete-item" :usingNameMode="usingNameMode" des="删除项目"><rticon-delete-item
        color="#233" /></icon-block>
    <icon-block name="delete" :usingNameMode="usingNameMode" des="删除"><rticon-delete color="#233" /></icon-block>
    <icon-block name="detail-inventory" :usingNameMode="usingNameMode" des="盘点详情"><rticon-detail-inventory
        color="#233" /></icon-block>
    <icon-block name="detail-template" :usingNameMode="usingNameMode" des="明细模版"><rticon-detail-template
        color="#233" /></icon-block>
    <icon-block name="disable" :usingNameMode="usingNameMode" des="禁用"><rticon-disable color="#233" /></icon-block>
    <icon-block name="distribute-auto" :usingNameMode="usingNameMode" des="自动分配"><rticon-distribute-auto
        color="#233" /></icon-block>
    <icon-block name="distribute-cancel" :usingNameMode="usingNameMode" des="取消分配"><rticon-distribute-cancel
        color="#233" /></icon-block>
    <icon-block name="distribute-confirm" :usingNameMode="usingNameMode" des="确认分配"><rticon-distribute-confirm
        color="#233" /></icon-block>
    <icon-block name="distribute" :usingNameMode="usingNameMode" des="下发"><rticon-distribute color="#233" /></icon-block>

    <icon-block name="enable" :usingNameMode="usingNameMode" des="启用"><rticon-enable color="#233" /></icon-block>
    <icon-block name="escalation" :usingNameMode="usingNameMode" des="上报"><rticon-escalation color="#233" /></icon-block>
    <icon-block name="examine" :usingNameMode="usingNameMode" des="审批"><rticon-examine color="#233" /></icon-block>
    <icon-block name="execute" :usingNameMode="usingNameMode" des="处理"><rticon-execute color="#233" /></icon-block>
    <icon-block name="export" :usingNameMode="usingNameMode" des="导出"><rticon-export color="#233" /></icon-block>

    <icon-block name="fault" :usingNameMode="usingNameMode" des="上报故障"><rticon-fault color="#233" /></icon-block>
    <icon-block name="fillin-data" :usingNameMode="usingNameMode" des="填写数据"><rticon-fillin-data
        color="#233" /></icon-block>

    <icon-block name="generate-barcode" :usingNameMode="usingNameMode" des="生成条码"><rticon-generate-barcode
        color="#233" /></icon-block>
    <icon-block name="grant" :usingNameMode="usingNameMode" des="发放"><rticon-grant color="#233" /></icon-block>

    <icon-block name="import-detail" :usingNameMode="usingNameMode" des="导入明细"><rticon-import-detail
        color="#233" /></icon-block>
    <icon-block name="import" :usingNameMode="usingNameMode" des="导入"><rticon-import color="#233" /></icon-block>

    <icon-block name="mixin" :usingNameMode="usingNameMode" des="复混"><rticon-mixin color="#233" /></icon-block>
    <icon-block name="modify" :usingNameMode="usingNameMode" des="修改"><rticon-modify color="#233" /></icon-block>

    <icon-block name="not-handled" :usingNameMode="usingNameMode" des="不予处理"><rticon-not-handled
        color="#233" /></icon-block>

    <icon-block name="related-defects" :usingNameMode="usingNameMode" des="关联缺陷"><rticon-related-defects
        color="#233" /></icon-block>
    <icon-block name="reset" :usingNameMode="usingNameMode" des="重置"><rticon-reset color="#233" /></icon-block>
    <icon-block name="return" :usingNameMode="usingNameMode" des="退还"><rticon-return color="#233" /></icon-block>
    <icon-block name="revoke" :usingNameMode="usingNameMode" des="撤回"><rticon-revoke color="#233" /></icon-block>
    <icon-block name="run" :usingNameMode="usingNameMode" des="启动"><rticon-run color="#233" /></icon-block>
    <icon-block name="running-record" :usingNameMode="usingNameMode" des="启停记录"><rticon-running-record
        color="#233" /></icon-block>

    <icon-block name="sampling-cancel" :usingNameMode="usingNameMode" des="取消接样"><rticon-sampling-cancel
        color="#233" /></icon-block>
    <icon-block name="sampling-composite-cancel" :usingNameMode="usingNameMode"
      des="取消组样"><rticon-sampling-composite-cancel color="#233" /></icon-block>
    <icon-block name="sampling-composite-confirm" :usingNameMode="usingNameMode"
      des="确认组样"><rticon-sampling-composite-confirm color="#233" /></icon-block>
    <icon-block name="sampling-receive-confirm" :usingNameMode="usingNameMode" des="确认接样"><rticon-sampling-receive-confirm
        color="#233" /></icon-block>
    <icon-block name="sampling-receive" :usingNameMode="usingNameMode" des="收样"><rticon-sampling-receive
        color="#233" /></icon-block>
    <icon-block name="sampling-send" :usingNameMode="usingNameMode" des="送样"><rticon-sampling-send
        color="#233" /></icon-block>
    <icon-block name="sampling-spot" :usingNameMode="usingNameMode" des="抽样"><rticon-sampling-spot
        color="#233" /></icon-block>
    <icon-block name="save-case" :usingNameMode="usingNameMode" des="存为案例"><rticon-save-case color="#233" /></icon-block>
    <icon-block name="save" :usingNameMode="usingNameMode" des="保存"><rticon-save color="#233" /></icon-block>
    <icon-block name="search" :usingNameMode="usingNameMode" des="搜索"><rticon-search color="#233" /></icon-block>
    <icon-block name="send-cancel" :usingNameMode="usingNameMode" des="取消发送"><rticon-send-cancel
        color="#233" /></icon-block>
    <icon-block name="send" :usingNameMode="usingNameMode" des="发送"><rticon-send color="#233" /></icon-block>
    <icon-block name="storageIn-confirm" :usingNameMode="usingNameMode" des="入库确认"><rticon-storageIn-confirm
        color="#233" /></icon-block>
    <icon-block name="storageIn-revoke" :usingNameMode="usingNameMode" des="撤销入库"><rticon-storageIn-revoke
        color="#233" /></icon-block>
    <icon-block name="storageOut-confirm" :usingNameMode="usingNameMode" des="出库确认"><rticon-storageOut-confirm
        color="#233" /></icon-block>
    <icon-block name="storageOut-revoke" :usingNameMode="usingNameMode" des="撤销出库"><rticon-storageOut-revoke
        color="#233" /></icon-block>
    <icon-block name="submit-repository" :usingNameMode="usingNameMode" des="提交知识库"><rticon-submit-repository
        color="#233" /></icon-block>
    <icon-block name="submit" :usingNameMode="usingNameMode" des="提交"><rticon-submit color="#233" /></icon-block>

    <icon-block name="task-distribution" :usingNameMode="usingNameMode" des="任务下发"><rticon-task-distribution
        color="#233" /></icon-block>
    <icon-block name="task-feedback" :usingNameMode="usingNameMode" des="任务反馈"><rticon-task-feedback
        color="#233" /></icon-block>
    <icon-block name="template" :usingNameMode="usingNameMode" des="模版"><rticon-template color="#233" /></icon-block>

    <icon-block name="view-detail" :usingNameMode="usingNameMode" des="查看详情"><rticon-view-detail
        color="#233" /></icon-block>

    <icon-block name="weigh-cancel" :usingNameMode="usingNameMode" des="取消称重"><rticon-weigh-cancel
        color="#233" /></icon-block>
    <icon-block name="weigh-complete" :usingNameMode="usingNameMode" des="称重完毕"><rticon-weigh-complete
        color="#233" /></icon-block>
    <icon-block name="weigh-start" :usingNameMode="usingNameMode" des="开始称重"><rticon-weigh-start
        color="#233" /></icon-block>
    <icon-block name="weight-confirm" :usingNameMode="usingNameMode" des="重量确定"><rticon-weight-confirm
        color="#233" /></icon-block>
    <icon-block name="withdraw" :usingNameMode="usingNameMode" des="撤销"><rticon-withdraw color="#233" /></icon-block>
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