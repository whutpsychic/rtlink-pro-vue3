<template>
  <div :class="props.curr ? 'rt-formula-item-can const current' : 'rt-formula-item-can const'" @click="$emit('select')">
    <div>
      <el-input-number :model-value="props.value" controls-position="right" @change="handleChange"></el-input-number>
    </div>
    <div class="icon-can">
      <el-icon @click="onDelete">
        <CircleClose />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { CircleClose } from '@element-plus/icons-vue'
import { ElInputNumber, ElIcon } from 'element-plus'

const props = defineProps({
  // 值
  value: { type: Number, default: 0 },
  // 操作位置
  curr: { type: Boolean, default: false }
})

const $emit = defineEmits(['change', 'delete'])

const onDelete = (e) => {
  e.stopPropagation();
  $emit('delete');
}

const handleChange = (v) => {
  $emit('change', v)
}

</script>
