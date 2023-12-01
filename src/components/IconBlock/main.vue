<template>
  <div :title="des" class="icon-block" @click="copy">
    <slot></slot>
    <p class="ft">{{ name }}</p>
    <p>{{ des }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const props = defineProps({
  name: { type: String, default: "" },
  des: { type: String, default: "" },
  mobile: { type: Boolean, default: false },
  usingNameMode: { type: [Boolean], required: true, default: false }
})

const copyText = (textToCopy: string) => {
  if (!navigator.clipboard) {
    // 如果当前浏览器不支持 Clipboard API，则使用 execCommand 方法
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      ElMessage({
        message: ` ${textToCopy} 已复制到剪贴板！`,
        type: 'success'
      })
    } catch (err) {
      ElMessage({
        message: "无法复制到剪贴板：" + err,
        type: 'error'
      })
    }
    document.body.removeChild(textArea);
    return;
  }
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      ElMessage({
        message: ` ${textToCopy} 已复制到剪贴板！`,
        type: 'success'
      })
    })
    .catch((err) => {
      ElMessage({
        message: "无法复制到剪贴板：" + err,
        type: 'error'
      })
    });
}


const copy = () => {
  const { name, mobile, usingNameMode } = props

  if (usingNameMode) {
    const content = mobile ? `<rt-icon name="${name}-m" />` : `<rt-icon name="${name}" />`
    // 将内容复制到剪贴板
    copyText(content)
  } else {
    const content = mobile ? `<rtmicon-${name} />` : `<rticon-${name} />`
    // 将内容复制到剪贴板
    copyText(content)
  }
}

</script>

<style scoped>
.icon-block {
  width: 125px;
  height: 95px;
  padding: 0 10px;
  padding-top: 30px;
  border-bottom: solid 1px #eee;
  border-right: solid 1px #eee;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  cursor: pointer;
  transition: .2s;
}

.icon-block:hover {
  background-color: #ecf5ff;
}

p {
  flex-basis: 100%;
  font-size: 13px;
  color: #666;
  margin: 0;
  margin-bottom: 4px;
  text-align: center;
}

.ft {
  margin-top: 6px;
}
</style>