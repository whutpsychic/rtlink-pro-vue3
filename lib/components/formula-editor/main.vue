<template>
  <div class="rt-formula-editor-container">
    <!-- 顶部操作条 -->
    <div class="top-section">
      <p class="left-title">{{ state.title }}</p>
      <div class="right-btns">
        <el-button v-for="(item, i) in state.calcSymbols" :key="i" @click="addSymbol(item.value)">{{
          item.label }}</el-button>
        <el-button @click="addItem">添加变量</el-button>
        <el-button @click="addNumber">添加常量</el-button>
        <el-button @click="backspace" :disabled="!(props.value && props.value.length > 0)">退格</el-button>
        <el-button @click="clear" :disabled="!(props.value && props.value.length > 0)">清空</el-button>
      </div>
    </div>
    <!-- 分割线 -->
    <div v-if="!(props.extraSymbols && props.extraSymbols.length > 0)" class="spliter"></div>
    <!-- 额外的符号显示栏 -->
    <el-collapse v-if="props.extraSymbols && props.extraSymbols.length > 0"
      :value="state.showAllSymbols ? 'extraSymbols' : null">
      <el-collapse-item title="其他符号" name="extraSymbols">
        <el-button v-for="(item, i) in props.extraSymbols" :key="i" class="extra-symbol-btn"
          @click="addSymbol(item.value)">{{
            item.label }}</el-button>
      </el-collapse-item>
    </el-collapse>
    <div v-show="state.showAllSymbols" class="spliter"></div>
    <!-- 错误信息提示处 -->
    <div :class="errorMessage ? `fmerror-msg-tips` : `fmerror-msg-tips hide`">
      <el-alert :title="errorMessage" type="error" show-icon :closable="false" />
    </div>
    <!-- 公式字符串预览 -->
    <div class="formulastr-previewer">
      <p v-if="formulaStr" class="formulaStr-can">
        <template v-for="(el, i) in elementArr">
          <span v-if="el.type === 'number'" class="str-number">{{ el.label }}</span>
          <span v-else-if="el.type === 'symbol'" class="str-symbol">{{ el.label }}</span>
          <span v-else-if="el.type === 'var'" class="str-var">{{ el.label }}</span>
        </template>
      </p>
      <p v-else class="placeholder">公式预览</p>
    </div>
    <div class="spliter"></div>
    <!-- 公式值编辑处 -->
    <div class="rt-formula-main-content">
      <component v-for="(item, i) in props.value" :key="i" :is="_judgeItemTypeByValue(item)"
        :label="_getItemLabelByValue(item)" :value="item" @delete="() => onDeleteItem(i)" @select="() => onSelectItem(i)"
        :curr="state.currIndex === i" @change="(v) => onChangeItemValue(v, i)" :varOptions="props.varOptions"
        :varOffset="props.varOffset" :offsetSpliter="props.offsetSpliter" :varDecoration="props.varDecoration"
        :mode="props.mode" :filterable="props.filterable" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch, onMounted, unref } from 'vue';
import SymbolItem from "./items/Symbol.vue";
import NumberItem from "./items/Number.vue";
import Item from "./items/Item.vue";
import defaultRules from './defaultRules.js';

const props = defineProps({
  // v-model
  value: { type: Array, default: () => ([]) },
  // 变量数据源
  varOptions: { type: Array, default: () => ([]) },
  // 变量选择模式
  mode: { type: String, default: "select" },
  // 变量数据过多，需要顶部快捷搜索定位（仅 mode = select）
  filterable: { type: Boolean, default: false },
  // 额外符号
  extraSymbols: { type: Array, default: () => ([]) },
  // 错误信息
  errmsg: { type: [String, Boolean], default: null },
  // 变量偏移量
  varOffset: { type: Boolean, default: false },
  // 偏移量分隔符
  offsetSpliter: { type: String, default: "|" },
  // 变量修饰符
  varDecoration: { type: String, default: "" },
  // 附加规则
  rules: { type: Array, default: () => ([]) },
})

const $emit = defineEmits(['update:value', 'select'])

const state = reactive({
  title: "计算公式",
  // 展示所有计算符号
  showAllSymbols: false,
  // 计算符号（默认）
  calcSymbols: [
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "*", value: "*" },
    { label: "/", value: "/" },
    { label: "(", value: "(" },
    { label: ")", value: ")" },
  ],
  // 当前操作的节点索引
  currIndex: -1,
  // 默认的错误信息
  error: ""
})

// 字符串结果
const formulaStr = computed(() => {
  const { value } = props;
  let result = value.map((item) => {
    return _getItemLabelByValue(item);
  })
  return result.join("");
})

const preVarDecoration = computed(() => {
  const { varDecoration } = props;
  return varDecoration[0] || "";
})

const suffVarDecoration = computed(() => {
  const { varDecoration } = props;
  return varDecoration[1] || "";
})

const errorMessage = computed(() => {
  const { errmsg } = props;
  const { error } = state;
  // 如果被关闭了则始终不显示
  if (typeof (errmsg) === 'boolean' && !errmsg) {
    return
  }
  return errmsg || error;
})

// 各项数组
const elementArr = computed(() => {
  const { value } = props;
  let result = [];

  value.forEach((item) => {
    let newItem = { label: null, value: item, type: "unknown" };
    if (_isConst(item)) {
      newItem.type = 'number';
      newItem.label = item;
    }
    else if (_isSymbol(item)) {
      newItem.type = 'symbol';
      newItem.label = _getItemLabelByValue(item);
    }
    else {
      newItem.type = 'var';
      newItem.label = _getItemLabelByValue(item);
    }

    result.push(newItem);
  })

  return result;
})
// -----------------------------------------------
// 外部暴露
const getStrResult = () => {
  return unref(formulaStr);
}

// =================== v-model ===================
const addSymbol = (s) => {
  const { value } = props;
  const { currIndex } = state;
  value.splice(currIndex + 1, 0, s);
  $emit('update:value', value);
  state.currIndex++;
}

const addNumber = () => {
  const { value } = props;
  const { currIndex } = state;
  value.splice(currIndex + 1, 0, 0);
  $emit('update:value', value);
  state.currIndex++;
}

const addItem = () => {
  const { value } = props;
  const { currIndex } = state;
  value.splice(currIndex + 1, 0, null);
  $emit('update:value', value);
  state.currIndex++;
}

const backspace = () => {
  const position = props.value.length - 1;
  onDeleteItem(position);
}

const clear = () => {
  state.currIndex = -1;
  $emit('update:value', []);
}

// 值改变时
const onChangeItemValue = (v, index) => {
  const { value } = props;
  let result = [...value]
  result[index] = v
  $emit('update:value', result);
}

// 删除某一项
const onDeleteItem = (index) => {
  // 将当前操作项提前一位
  const _curri = index - 1;
  state.currIndex = _curri < -1 ? -1 : _curri;

  const { value } = props;
  value.splice(index, 1);
  $emit('update:value', value);
}

// 选择某项
const onSelectItem = (index) => {
  state.currIndex = index;
  if (props.mode === 'custom') {
    $emit('select', index)
  }
}

// 判断是否是符号类型
const _isSymbol = (item) => {
  const targetOfDefaults = state.calcSymbols.find((_item) => { return _item.value === item });
  const targetOfExtras = props.extraSymbols.find((_item) => { return _item.value === item });

  return targetOfDefaults || targetOfExtras;
}

// 判断是否是常量类型
const _isConst = (item) => {
  const result = typeof (item) === 'number';
  return result;
}

// 根据项类型渲染item
const _judgeItemTypeByValue = (item) => {
  if (_isConst(item)) {
    return NumberItem;
  }
  else if (_isSymbol(item)) {
    return SymbolItem;
  }
  // 其余都认为是变量
  else {
    return Item;
  }
}

// 根据项的值获取其label
const _getItemLabelByValue = (rawitem) => {
  const { varOptions, offsetSpliter } = props;
  if (!rawitem) {
    return "未选择的变量";
  }
  else if (_isConst(rawitem)) {
    return rawitem;
  }
  else {
    const item = rawitem.replace(unref(preVarDecoration), '').replace(unref(suffVarDecoration), '')
    const symbolTarget = _isSymbol(item);
    if (symbolTarget) {
      return symbolTarget.label;
    }
    else {
      const target = varOptions.find((_item) => {
        return _item.value === item;
      })
      // 偏移量功能
      const target2 = varOptions.find((_item) => {
        if (!item) {
          return
        }
        const arr = item.split(offsetSpliter);
        return _item.value === arr[0];
      });
      const finalTarget = target || target2;
      if (finalTarget) {
        return finalTarget.label;
      }
      else {
        return "未知变量";
      }
    }
  }
}

// ==============================
watch(() => props.value, (newv, oldv) => {
  // 在这里检测 value
  const { rules } = props;
  let errmsg;
  const allRules = [...defaultRules, ...rules]
  for (let i = 0; i < allRules.length; i++) {
    const fn = allRules[i].fn;
    const err = fn(unref(elementArr));
    if (err) {
      errmsg = allRules[i].msg;
      break;
    }
  }
  state.error = errmsg;
})
// ==============================
onMounted(() => {
  // 加载后调整一次当前操作的项索引
  const { value } = props;
  state.currIndex = value.length - 1;
})

</script>
<style src="./style.css"></style>
<style>
.rt-formula-editor-container {
  margin: 0;
  padding: 20px;
  border: dashed 1px #ddd;
  min-width: 800px;
}

.rt-formula-editor-container .top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: orange; */
}

.rt-formula-editor-container .spliter {
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 10px 0;
}

.rt-formula-editor-container .rt-formula-main-content {
  display: flex;
  flex-wrap: wrap;
}

.rt-formula-editor-container .placeholder {
  color: #ddd;
}

.rt-formula-editor-container .formulaStr-can {
  font-size: 15px;
}

.rt-formula-editor-container .formulaStr-can .str-number {
  margin: 0 3px;
}

.rt-formula-editor-container .formulaStr-can .str-symbol {
  margin: 0 3px;
}

.rt-formula-editor-container .formulaStr-can .str-var {
  margin: 0 3px;
}

.rt-formula-editor-container .fmerror-msg-tips {
  overflow: hidden;
  transition: .3s;
  height: 40px;
}

.rt-formula-editor-container .fmerror-msg-tips.hide {
  height: 0;
}
</style>
