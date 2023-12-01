import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('iconMode', () => {
  // true: 命名式; false: 组件式
  const mode = ref<Boolean>(true);

  function change(type: Boolean) {
    mode.value = type;
  }

  return { mode, change }
})
