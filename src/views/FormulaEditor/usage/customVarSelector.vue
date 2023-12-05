<template>
  <div>
    <h2>自定义变量选择</h2>
    <demo-block height="950">
      <template #main>
        <rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :rules="rules" mode="custom"
          @select="onSelect"></rt-formula-editor>
        <el-dialog :visible.sync="selecting" title="选择自定义的变量">
          <el-button v-for="(item) in varOptions" :key="item.value" @click="() => onChoose(item.value)">
            {{ item.label }}
          </el-button>
        </el-dialog>
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
      selecting: false,
      currentIndex: 0,
      formula: [],
      varOptions: [
        { label: "第一个自定义的选项", value: "option1" },
        { label: "第二个自定义的选项", value: "option2" },
        { label: "第三个自定义的选项", value: "option3" },
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
      codehtml: `<rt-formula-editor ref="fe" v-model="formula" :varOptions="varOptions" :rules="rules" mode="custom"
          @select="onSelect"></rt-formula-editor>
        <el-dialog :visible.sync="selecting" title="选择自定义的变量">
          <el-button v-for="(item) in varOptions" :key="item.value" @click="() => onChoose(item.value)">
            {{ item.label }}
          </el-button>
        </el-dialog>`,
      code:
        `export default {
  data() {
    return {
      selecting: false,
      currentIndex: 0,
      formula: [],
      varOptions: [
        { label: "第一个自定义的选项", value: "option1" },
        { label: "第二个自定义的选项", value: "option2" },
        { label: "第三个自定义的选项", value: "option3" },
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
  },
  methods: {
    onSelect(index) {
      this.selecting = true;
      this.currentIndex = index;
    },
    onChoose(v) {
      const { currentIndex, formula } = this;
      let result = [...formula];
      result[currentIndex] = v;
      this.formula = result;
      this.selecting = false;
    },
  }
}`,
    }
  },
  methods: {
    onSelect(index) {
      this.selecting = true;
      this.currentIndex = index;
    },
    onChoose(v) {
      const { currentIndex, formula } = this;
      let result = [...formula];
      result[currentIndex] = v;
      this.formula = result;
      this.selecting = false;
    },
  }
}
</script>

<style scoped></style>