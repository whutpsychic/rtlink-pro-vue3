<template>
  <div>
    <h2>自定义校验规则</h2>
    <demo-block height="700">
      <template #main>
        <rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :rules="rules"></rt-formula-editor>
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
      rules: [
        {
          fn: (elementArr) => {
            return elementArr.length > 5;
          },
          msg: '公式长度不能超过5!'
        },
        {
          fn: (elementArr) => {
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
      codehtml: `<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :rules="rules"></rt-formula-editor>`,
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
      rules: [
        {
          fn: (elementArr) => {
            return elementArr.length > 5;
          },
          msg: '公式长度不能超过5!'
        },
        {
          fn: (elementArr) => {
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
    }
  }
}`,
    }
  },
}
</script>

<style scoped></style>