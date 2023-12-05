<template>
  <div>
    <h2>列表模式选择变量</h2>
    <demo-block height="640">
      <template #main>
        <rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :extraSymbols="extraSymbols"
          mode="list"></rt-formula-editor>
      </template>
      <template #codes>
        <pre v-highlightjs>
          <code class="html">{{ codehtml }}</code>
          <code class="javascript">{{ code }}</code>
        </pre>
      </template>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formula: [],
      varOptions: [],
      extraSymbols: [
        { label: '$', value: '$' },
        { label: '^', value: '^' },
        { label: '&', value: '&' },
      ],
      codehtml: `<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :extraSymbols="extraSymbols" mode="list"></rt-formula-editor>`,
      code:
        `export default {
  data() {
    return {
      formula: [],
      varOptions: [
        { label: "第一个选项", value: "option1" },
        { label: "第二个选项", value: "option2" },
        { label: "第三个选项", value: "option3" },
      ],
      extraSymbols: [
        { label: '$', value: '$' },
        { label: '^', value: '^' },
        { label: '&', value: '&' },
        { label: '恶意的非常规符号', value: 'hell1' },
      ],
    }
  },
  mounted() {
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
    this.varOptions = result;
  },
}`,
    }
  },
  mounted() {
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
    this.varOptions = result;
  },
}
</script>

<style scoped></style>