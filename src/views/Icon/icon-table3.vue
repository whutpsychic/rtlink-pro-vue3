<template>
  <div class="icon-table">

    <icon-block name="address" :usingNameMode="usingNameMode" des="地址" mobile><rtmicon-address /></icon-block>
    <icon-block name="arrow-right" :usingNameMode="usingNameMode" des="右箭头" mobile><rtmicon-arrow-right /></icon-block>
    <icon-block name="back" :usingNameMode="usingNameMode" des="后退" mobile><rtmicon-back /></icon-block>
    <icon-block name="calendar" :usingNameMode="usingNameMode" des="日历" mobile><rtmicon-calendar /></icon-block>
    <icon-block name="craft-table" :usingNameMode="usingNameMode" des="工作台" mobile><rtmicon-craft-table /></icon-block>
    <icon-block name="department" :usingNameMode="usingNameMode" des="部门" mobile><rtmicon-department /></icon-block>
    <icon-block name="done" :usingNameMode="usingNameMode" des="已办" mobile><rtmicon-done /></icon-block>
    <icon-block name="email" :usingNameMode="usingNameMode" des="电子邮件" mobile><rtmicon-email /></icon-block>
    <icon-block name="hide" :usingNameMode="usingNameMode" des="隐藏" mobile><rtmicon-hide /></icon-block>
    <icon-block name="home" :usingNameMode="usingNameMode" des="首页" mobile><rtmicon-home /></icon-block>
    <icon-block name="logistics-complete" :usingNameMode="usingNameMode" des="物流完成"
      mobile><rtmicon-logistics-complete /></icon-block>
    <icon-block name="logistics-data" :usingNameMode="usingNameMode" des="物流数据"
      mobile><rtmicon-logistics-data /></icon-block>
    <icon-block name="logistics-reservation" :usingNameMode="usingNameMode" des="物流预约"
      mobile><rtmicon-logistics-reservation /></icon-block>
    <icon-block name="logistics-vehicle" :usingNameMode="usingNameMode" des="物流车辆"
      mobile><rtmicon-logistics-vehicle /></icon-block>
    <icon-block name="message" :usingNameMode="usingNameMode" des="消息" mobile><rtmicon-message /></icon-block>
    <icon-block name="mine" :usingNameMode="usingNameMode" des="我的" mobile><rtmicon-mine /></icon-block>
    <icon-block name="mystate-abnormal" :usingNameMode="usingNameMode" des="我的状态（异常）"
      mobile><rtmicon-mystate-abnormal /></icon-block>
    <icon-block name="mystate-normal" :usingNameMode="usingNameMode" des="我的状态（正常）"
      mobile><rtmicon-mystate-normal /></icon-block>
    <icon-block name="myrequest-draft" :usingNameMode="usingNameMode" des="我的请求-草稿"
      mobile><rtmicon-myrequest-draft /></icon-block>
    <icon-block name="myrequest-end" :usingNameMode="usingNameMode" des="我的请求-结束"
      mobile><rtmicon-myrequest-end /></icon-block>
    <icon-block name="myrequest-running" :usingNameMode="usingNameMode" des="我的请求-运行中"
      mobile><rtmicon-myrequest-running /></icon-block>
    <icon-block name="pass-perusal" :usingNameMode="usingNameMode" des="传阅" mobile><rtmicon-pass-perusal /></icon-block>
    <icon-block name="phone-number" :usingNameMode="usingNameMode" des="电话/手机"
      mobile><rtmicon-phone-number /></icon-block>
    <icon-block name="read-already" :usingNameMode="usingNameMode" des="已阅" mobile><rtmicon-read-already /></icon-block>
    <icon-block name="read-wait" :usingNameMode="usingNameMode" des="未阅" mobile><rtmicon-read-wait /></icon-block>
    <icon-block name="request" :usingNameMode="usingNameMode" des="请求" mobile><rtmicon-request /></icon-block>
    <icon-block name="role" :usingNameMode="usingNameMode" des="角色" mobile><rtmicon-role /></icon-block>
    <icon-block name="search" :usingNameMode="usingNameMode" des="搜索" mobile><rtmicon-search /></icon-block>
    <icon-block name="station" :usingNameMode="usingNameMode" des="岗位" mobile><rtmicon-station /></icon-block>
    <icon-block name="todo-already" :usingNameMode="usingNameMode" des="待办-已办"
      mobile><rtmicon-todo-already /></icon-block>
    <icon-block name="todo-wait" :usingNameMode="usingNameMode" des="待办-等待" mobile><rtmicon-todo-wait /></icon-block>
    <icon-block name="todo" :usingNameMode="usingNameMode" des="待办" mobile><rtmicon-todo /></icon-block>
    <icon-block name="triangle-above" :usingNameMode="usingNameMode" des="向上三角"
      mobile><rtmicon-triangle-above /></icon-block>
    <icon-block name="triangle-below" :usingNameMode="usingNameMode" des="向下三角"
      mobile><rtmicon-triangle-below /></icon-block>
    <icon-block name="triangle-updown" :usingNameMode="usingNameMode" des="上下三角"
      mobile><rtmicon-triangle-updown /></icon-block>
    <icon-block name="view" :usingNameMode="usingNameMode" des="显示" mobile><rtmicon-view /></icon-block>

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


<style scoped>.icon-table {
  width: 876px;
  border-top: solid 1px #eee;
  border-left: solid 1px #eee;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 80px;
}</style>