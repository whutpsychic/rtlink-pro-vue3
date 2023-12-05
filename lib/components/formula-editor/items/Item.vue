<template>
  <div :class="curr ? 'rt-formula-item-can var current' : 'rt-formula-item-can var'" @click="$emit('select')">
    <div :style="`width:${innerWidth};`" class="var-can">
      <el-select v-if="props.mode === 'select'" style="width:100%;" :model-value="optionValue" @change="handleChange"
        :placeholder="state.placeholder" :filterable="filterable">
        <el-option v-for="(item) in varOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
      </el-select>
      <el-button v-else-if="props.mode === 'list'" @click="state.selecting = true">{{ _getLabelByValue() }}</el-button>
      <el-button v-else-if="props.mode === 'custom'" @click="$emit('select')">{{ _getLabelByValue() }}</el-button>
      <div v-if="varOffset" class="divider"></div>
      <el-input-number v-if="varOffset" :model-value="offsetValue" controls-position="right"
        @change="onChangeOffset"></el-input-number>
    </div>
    <div class="icon-can">
      <el-icon @click="onDelete">
        <CircleClose />
      </el-icon>
    </div>
    <el-dialog v-if="props.mode === 'list'" v-model="state.selecting" title="选择变量">
      <ListTable :varOptions="varOptions" :varOffset="varOffset" :offsetSpliter="offsetSpliter"
        :varDecoration="varDecoration" @select="handleSelect" />
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, unref } from 'vue'
import { ElSelect, ElOption, ElButton, ElInputNumber, ElIcon, ElDialog } from 'element-plus'

import { CircleClose } from '@element-plus/icons-vue'
import ListTable from '../common/ListTable.vue'

const props = defineProps({
  // 值
  value: { type: String, default: "" },
  // 操作位置
  curr: { type: Boolean, default: false },
  // 变量可选值
  varOptions: { type: Array, default: () => ([]) },
  // 变量数据过多，需要顶部快捷搜索定位（仅 mode = select）
  filterable: { type: Boolean, default: false },
  // 变量选择模式
  mode: { type: String, default: "" },
  // 是否带有偏移量
  varOffset: { type: Boolean, default: false },
  // 偏移量分隔符
  offsetSpliter: { type: String, default: "" },
  // 变量修饰符
  varDecoration: { type: String, default: "" },
})

const $emit = defineEmits(['change', 'delete'])

const state = reactive({
  // ================= 通用 =================
  placeholder: '请选择变量',
  // 偏移量宽度 px
  offsetWidth: 100,
  // 无偏移量时的容器默认宽度 px
  widthWithoutOffset: props.mode === 'select' ? 130 : 92,
  // 有偏移量时的容器默认宽度 px
  widthWithOffset: props.mode === 'select' ? 240 : 215,
  // ================= mode==='list' =================
  selecting: false,
})

// ----------------------------------------------
const optionValue = computed(() => {
  const { value, varOffset, offsetSpliter } = props;

  if (!value) return null;
  if (varOffset) {
    const arr = value.split(offsetSpliter);
    return arr[0].replace(unref(preVarDecoration), '');
  } else {
    return value.replace(unref(preVarDecoration), '').replace(unref(suffVarDecoration), '');
  }
})

const offsetValue = computed(() => {
  const { value, offsetSpliter } = props;
  if (!value) return 0;
  const arr = value.split(offsetSpliter);
  let result = 0;
  if (arr[1]) {
    // 看看是否是小数
    if (arr[1].indexOf('.') > -1) {
      result = parseFloat(arr[1]);
    } else {
      result = parseInt(arr[1]);
    }
  }
  return result;
})

const preVarDecoration = computed(() => {
  const { varDecoration } = props;
  return varDecoration[0] || "";
})

const suffVarDecoration = computed(() => {
  const { varDecoration } = props;
  return varDecoration[1] || "";
})

// 下拉框宽度
const innerWidth = computed(() => {
  const { varOptions, value, varOffset } = props;
  const { widthWithoutOffset, widthWithOffset, offsetWidth } = state;
  const { mode } = props;
  const target = varOptions.find((item) => { return item.value === value });

  // 检查是否是默认无偏移量且开启了偏移量功能
  const target2 = varOptions.find((item) => { return item.value === unref(optionValue) });

  const finalTarget = target || target2;

  // 短字方案
  function _shortFa(_L) {
    return varOffset ? `calc(${_L * 1 + 1.5}em + ${offsetWidth + 30}px)` : `calc(${_L * 1 + 1.5}em + 20px)`;
  }
  // 中字长方案
  function _normalFa(_L) {
    return varOffset ? `calc(${_L * 1 + 1.2}em + ${offsetWidth + 40}px)` : `calc(${_L * 1 + 1.2}em + 20px)`;
  }
  // 巨长字方案
  function _longFa(_L) {
    return varOffset ? `calc(${_L * 1 + 1.5}em + ${offsetWidth + 40}px)` : `calc(${_L * 1 + 1}em + 15px)`;
  }

  if (mode === 'select') {
    // 没找到label的情况
    if (!finalTarget) {
      return varOffset ? `${widthWithOffset}px` : `${widthWithoutOffset}px`;
    }
    // 根据值找到label
    else {
      const L = finalTarget.label.length;
      // 根据label长度设置宽度
      return L <= 8 ? _shortFa(L) : (L <= 16 ? _normalFa(L) : _longFa(L))
    }
  }
  // button 模式
  else {
    return 'auto';
  }
})

// ===========================
const onDelete = (e) => {
  e.stopPropagation();
  $emit('delete');
}

const handleChange = (v) => {
  const { varOffset, offsetSpliter } = props;
  if (varOffset) {
    $emit('change', `${unref(preVarDecoration)}${v}${offsetSpliter}${unref(offsetValue)}${unref(suffVarDecoration)}`);
  }
  else {
    $emit('change', `${unref(preVarDecoration)}${v}${unref(suffVarDecoration)}`);
  }
}

// 改变偏移量时
const onChangeOffset = (v) => {
  const { value, offsetSpliter } = props;
  if (!value) return;
  const arr = value.split(offsetSpliter);
  const result = `${arr[0]}${offsetSpliter}${v}`.replace(unref(preVarDecoration), '').replace(unref(suffVarDecoration), '');
  const decoratedResult = `${unref(preVarDecoration)}${result}${unref(suffVarDecoration)}`;
  $emit('change', decoratedResult);
}


// 矫正偏移量的值
const correctValueWithOffset = () => {
  const { varOffset } = props;
  if (!varOffset) {
    return;
  }
  else {
    let { value, offsetSpliter } = props;
    if (!value) return;
    const arr = value.split(offsetSpliter);
    if (!arr[1]) {
      onChangeOffset(0);
    }
  }
}

// 根据变量值找到其label
const _getLabelByValue = () => {
  const { value, varOptions } = props;
  const { placeholder } = state;
  if (!value && value !== 0) {
    return placeholder;
  }
  const { varOffset, offsetSpliter } = props;

  let targetValue = value.replace(unref(preVarDecoration), '').replace(unref(suffVarDecoration), '');

  if (varOffset) {
    targetValue = targetValue.split(offsetSpliter)[0]
  }

  const target = varOptions.find((item) => {
    return item.value === targetValue;
  })

  if (!!target) {
    return target.label;
  } else {
    return value;
  }
}

const handleSelect = (v) => {
  handleChange(v);
  state.selecting = false;
}

// ===========================
onMounted(() => {
  // 初始化矫正一次偏移量的值
  const { varOffset } = props;
  if (varOffset) {
    correctValueWithOffset();
  }
})

</script>

<style>
.rt-formula-item-can .var-can {
  display: flex;
  align-items: center;
}

.rt-formula-item-can .divider {
  display: inline-block;
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 10px;
}
</style>