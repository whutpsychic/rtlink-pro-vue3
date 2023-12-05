<template>
  <div :class="props.curr ? 'rt-formula-item-can symbol-can current' : 'rt-formula-item-can symbol-can'"
    @click="$emit('select')">
    <p>{{ props.label }}</p>
    <div class="icon-can">
      <el-icon @click="onDelete">
        <CircleClose />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { CircleClose } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'

const props = defineProps({
  // 文字
  label: { type: String, default: '???' },
  // 操作位置
  curr: { type: Boolean, default: false }
})

const $emit = defineEmits(['delete'])

const onDelete = (e) => {
  e.stopPropagation();
  $emit('delete');
}

</script>
