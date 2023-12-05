<template>
  <div>
    <h2>自定义变量选择</h2>
    <demo-block :codehtml="codehtml" :code="code">
      <template #main>
        <rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions" :rules="state.rules"
          mode="custom" @select="onSelect"></rt-formula-editor>
        <el-dialog v-model="state.selecting" title="选择自定义的变量">
          <el-button v-for="(item) in state.varOptions" :key="item.value" @click="() => onChoose(item.value)">
            {{ item.label }}
          </el-button>
        </el-dialog>
      </template>
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  selecting: false,
  currentIndex: <number>0,
  formula: [],
  varOptions: [
    { label: "第一个自定义的选项", value: "option1" },
    { label: "第二个自定义的选项", value: "option2" },
    { label: "第三个自定义的选项", value: "option3" },
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
  ]
})

const onSelect = (index: number) => {
  state.selecting = true;
  state.currentIndex = index;
}

const onChoose = (v: any) => {
  const { currentIndex, formula } = state;
  let result = <any>[...formula];
  result[currentIndex] = v;
  state.formula = result;
  state.selecting = false;
}

const codehtml = `<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions" :rules="state.rules"
          mode="custom" @select="onSelect"></rt-formula-editor>
        <el-dialog v-model="state.selecting" title="选择自定义的变量">
          <el-button v-for="(item) in state.varOptions" :key="item.value" @click="() => onChoose(item.value)">
            {{ item.label }}
          </el-button>
        </el-dialog>`

const code = `<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  selecting: false,
  currentIndex: <number>0,
  formula: [],
  varOptions: [
    { label: "第一个自定义的选项", value: "option1" },
    { label: "第二个自定义的选项", value: "option2" },
    { label: "第三个自定义的选项", value: "option3" },
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
  ]
})

const onSelect = (index: number) => {
  state.selecting = true;
  state.currentIndex = index;
}

const onChoose = (v: any) => {
  const { currentIndex, formula } = state;
  let result = <any>[...formula];
  result[currentIndex] = v;
  state.formula = result;
  state.selecting = false;
}

\<\/script\>`
</script>

<style scoped></style>