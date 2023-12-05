<template>
  <div>
    <h2>自定义附加符号</h2>
    <p>仅 mode 为 select 时</p>
    <demo-block height="400">
      <template #main>
        <rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions"
          :extraSymbols="extraSymbols"></rt-formula-editor>
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
      codehtml: `<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :extraSymbols="extraSymbols"></rt-formula-editor>`,
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
  }
}`,
    }
  },
}
</script>

<style scoped></style>