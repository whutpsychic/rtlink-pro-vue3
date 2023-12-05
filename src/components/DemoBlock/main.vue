<template>
  <div class="demo-block">
    <div class="demo-instance">
      <slot name="main"></slot>
    </div>
    <div class="collapse-btns">
      <el-button type="text" @click="showCodes = !showCodes">
        <span class="code-ecli">{{ showCodes ? '</>' : '<>' }}</span>
      </el-button>
    </div>
    <div v-if="props.codehtml" :class="'code-can'"
      :style="`height:${showCodes ? height1 : 0}px;${showCodes ? 'border-bottom:solid 1px #ddd;' : 'border-bottom:none'};`">
      <highlightjs language="html" :code="codehtml" />
    </div>
    <div v-if="props.code" :class="'code-can'"
      :style="`height:${showCodes ? height2 : 0}px;${showCodes ? 'border-bottom:solid 1px #ddd;' : 'border-bottom:none'};`">
      <highlightjs language="Javascript" :code="code" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
  codehtml: { type: String, default: '' },
  code: { type: String, default: '' },
})

const height1 = computed(() => {
  const length = props.codehtml.split('\n').length
  return length * 16 + 50;
})

const height2 = computed(() => {
  const length = props.code.split('\n').length
  return length * 16 + 50;
})

const showCodes = ref(false)

</script>

<style scoped>
.collapse-btns {
  display: flex;
  justify-content: flex-end;
  border: solid 1px #ddd;
  border-top: none;
  border-bottom: none;
  padding: 5px 10px;
}

.code-can {
  font-size: 14px;
  transition: .3s;
  overflow: hidden;
  border: solid 1px #ddd;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.demo-instance {
  padding: 20px;
  border: solid 1px #ddd;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.code-ecli {
  font-size: 17px;
  font-weight: bold;
}
</style>