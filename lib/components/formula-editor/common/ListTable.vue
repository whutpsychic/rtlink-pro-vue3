<template>
  <div class="rt-formula-listtable-container">
    <div class="main-items">
      <el-button v-for="(item) in currVars" @click="() => onSelectItem(item.value)">{{ item.label }}</el-button>
    </div>
    <div class="pagin-can">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current"
        :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="varOptions.length">
      </el-pagination>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const props = defineProps({
  // 变量可选值
  varOptions: { type: Array, default: () => ([]) },
  // 是否带有偏移量
  varOffset: { type: Boolean, default: false },
  // 偏移量分隔符
  offsetSpliter: { type: String, default: "" },
  // 变量修饰符
  varDecoration: { type: String, default: "" },
})

const $emit = defineEmits(['select'])

const state = reactive({
  current: 1,
  pageSize: 20,
  pageSizes: [20, 50, 100, 200],
})

const currVars = computed(() => {
  const { varOptions } = props;
  const { current, pageSize } = state;
  let result = varOptions.slice((current - 1) * pageSize, current * pageSize)
  return result;
})

const handleSizeChange = (size) => {
  state.pageSize = size;
}

const handleCurrentChange = (p) => {
  state.current = p;
}

const onSelectItem = (v) => {
  const { varOffset, offsetSpliter, varDecoration } = props;
  const preVarDecoration = varDecoration[0];
  const suffVarDecoration = varDecoration[1];

  let result = v.replace(preVarDecoration, '').replace(suffVarDecoration, '');

  if (varOffset) {
    let arr = result.split(offsetSpliter);
    result = arr[0];
  }

  $emit('select', result);
}

</script>

<style>
.rt-formula-listtable-container .main-items {
  margin-bottom: 20px;
  min-height: 200px;
  overflow-y: auto;
  max-height: 50vh;
}

.rt-formula-listtable-container .main-items .el-button {
  margin-right: 10px;
  margin-left: 0;
  margin-bottom: 10px;
}
</style>