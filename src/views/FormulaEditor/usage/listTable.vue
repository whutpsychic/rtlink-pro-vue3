<template>
  <div>
    <h2>列表模式选择变量</h2>
    <demo-block :codehtml="codehtml" :code="code">
      <template #main>
        <rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          :extraSymbols="state.extraSymbols" mode="list"></rt-formula-editor>
      </template>
    </demo-block>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'

const state = reactive({
  formula: [],
  varOptions: <any>[],
  extraSymbols: [
    { label: '$', value: '$' },
    { label: '^', value: '^' },
    { label: '&', value: '&' },
  ]
})

onMounted(() => {
  let result = []
  for (let i = 1; i < 33; i++) {
    result.push({ label: `第${i}个选项`, value: `option${i}` })
  }
  for (let i = 33; i < 67; i++) {
    result.push({ label: `第${i}个恶意的巨长无比的选项选项选项选`, value: `option${i}` })
  }
  for (let i = 67; i < 100; i++) {
    result.push({ label: `第${i}个选项`, value: `option${i}` })
  }
  state.varOptions = result;
})

const codehtml = `<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          :extraSymbols="state.extraSymbols" mode="list"></rt-formula-editor>`

const code = `<script lang="ts" setup>
import { reactive, onMounted } from 'vue'

const state = reactive({
  formula: [],
  varOptions: <any>[],
  extraSymbols: [
    { label: '$', value: '$' },
    { label: '^', value: '^' },
    { label: '&', value: '&' },
  ]
})

onMounted(() => {
  let result = []
  for (let i = 1; i < 33; i++) {
    result.push({ label: \`第\${i}个选项\`, value: \`option\${i}\` })
  }
  for (let i = 33; i < 67; i++) {
    result.push({ label: \`第\${i}个恶意的巨长无比的选项选项选项选\`, value: \`option\${i}\` })
  }
  for (let i = 67; i < 100; i++) {
    result.push({ label: \`第\${i}个选项\`, value: \`option\${i}\` })
  }
  state.varOptions = result;
})

\<\/script\>`

</script>

<style scoped></style>