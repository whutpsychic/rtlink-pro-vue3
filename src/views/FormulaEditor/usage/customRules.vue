<template>
  <div>
    <h2>自定义校验规则</h2>
    <demo-block :codehtml="codehtml" :code="code">
      <template #main>
        <rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          :rules="state.rules"></rt-formula-editor>
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
  ],
  rules: [
    {
      fn: (elementArr: Array<any>) => {
        return elementArr.length > 5;
      },
      msg: '公式长度不能超过5!'
    },
    {
      fn: (elementArr: Array<any>) => {
        const valueArr = elementArr.map((item) => { return item.value; });

        for (let i = 0; i < elementArr.length; i++) {
          let currV = valueArr[i];
          let nextV = valueArr[i + 1];

          return currV === 5 && nextV === '*'
        }
      },
      msg: '公式内容里不能包含5*'
    },
  ],
})

const codehtml = `<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          :rules="state.rules"></rt-formula-editor>`

const code =
  `<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个选项", value: "option2" },
    { label: "第三个选项", value: "option3" },
  ],
  rules: [
    {
      fn: (elementArr: Array<any>) => {
        return elementArr.length > 5;
      },
      msg: '公式长度不能超过5!'
    },
    {
      fn: (elementArr: Array<any>) => {
        const valueArr = elementArr.map((item) => { return item.value; });

        for (let i = 0; i < elementArr.length; i++) {
          let currV = valueArr[i];
          let nextV = valueArr[i + 1];

          return currV === 5 && nextV === '*'
        }
      },
      msg: '公式内容里不能包含5*'
    },
  ],
})

\<\/script\>`
</script>

<style scoped></style>