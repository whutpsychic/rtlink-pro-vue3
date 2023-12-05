<template>
  <h2>基础用法</h2>
  <demo-block :codehtml="codehtml" :code="code">
    <template #main>
      <rt-formula-editor ref="fe" v-model:value="formula" :varOptions="varOptions"></rt-formula-editor>
    </template>
  </demo-block>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const formula = ref([])

const varOptions = ref([
  { label: "第一个选项", value: "option1" },
  { label: "第二个比较长的选项", value: "option2" },
  { label: "两字", value: "option4" },
  { label: "三个字", value: "option5" },
  { label: "四个大字", value: "option6" },
  { label: "五个撒的字", value: "option7" },
  { label: "六个阿松大字", value: "option8" },
  { label: "七个啊手动阀字", value: "option9" },
  { label: "八个啊手动阀发字", value: "option10" },
  { label: "九个阿松大地方给字", value: "option11" },
  { label: "十个打算发链接地方字", value: "option12" },
  { label: "十一安抚克里斯蒂郡个字", value: "option13" },
  { label: "十二个啊手动阀的首发式字", value: "option14" },
  { label: "十三个啊手动阀的首发式尾部", value: "option15" },
  { label: "十四个啊手动阀的首发式字尾部", value: "option16" },
  { label: "十五个啊手动阀的首发式字是尾部", value: "option17" },
  { label: "十六个啊手动阀的首发式字水水尾部", value: "option18" },
  { label: "十七个啊手动阀的首发式字水水水尾部", value: "option19" },
  { label: "十八个啊手动阀的首发式字大大大大尾部", value: "option20" },
  { label: "十九个啊手动阀的首发式字阿松大啊实尾部", value: "option21" },
  { label: "巨长无比的选项选项选项选项选项选项选项选项选项选项选项选项选项尾部", value: "option3" },
])

const codehtml = `<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions"></rt-formula-editor>`

const code = `const formula = ref([])

const varOptions = ref([
{ label: "第一个选项", value: "option1" },
  { label: "第二个比较长的选项", value: "option2" },
  { label: "两字", value: "option4" },
  { label: "三个字", value: "option5" },
  { label: "四个大字", value: "option6" },
  { label: "五个撒的字", value: "option7" },
  { label: "六个阿松大字", value: "option8" },
  { label: "七个啊手动阀字", value: "option9" },
  { label: "八个啊手动阀发字", value: "option10" },
  { label: "九个阿松大地方给字", value: "option11" },
  { label: "十个打算发链接地方字", value: "option12" },
  { label: "十一安抚克里斯蒂郡个字", value: "option13" },
  { label: "十二个啊手动阀的首发式字", value: "option14" },
  { label: "十三个啊手动阀的首发式尾部", value: "option15" },
  { label: "十四个啊手动阀的首发式字尾部", value: "option16" },
  { label: "十五个啊手动阀的首发式字是尾部", value: "option17" },
  { label: "十六个啊手动阀的首发式字水水尾部", value: "option18" },
  { label: "十七个啊手动阀的首发式字水水水尾部", value: "option19" },
  { label: "十八个啊手动阀的首发式字大大大大尾部", value: "option20" },
  { label: "十九个啊手动阀的首发式字阿松大啊实尾部", value: "option21" },
  { label: "巨长无比的选项选项选项选项选项选项选项选项选项选项选项选项选项尾部", value: "option3" },
])`
</script>

<style scoped></style>