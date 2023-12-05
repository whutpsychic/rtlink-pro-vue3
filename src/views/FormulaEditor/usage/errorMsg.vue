<template>
  <div>
    <h2>错误信息</h2>
    <demo-block :codehtml="codehtml" :code="code">
      <template #main>
        <rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          errmsg="这里是一些错误信息"></rt-formula-editor>
      </template>
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个选项", value: "option2" },
    { label: "第三个选项", value: "option3" },
  ]
})

const codehtml = `<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          errmsg="这里是一些错误信息"></rt-formula-editor>`

const code = `<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个选项", value: "option2" },
    { label: "第三个选项", value: "option3" },
  ]
})

\<\/script\>`

</script>

<style scoped></style>