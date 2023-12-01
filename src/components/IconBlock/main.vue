<template>
  <div :title="des" class="icon-block" @click="copy">
    <slot></slot>
    <p class="ft">{{ name }}</p>
    <p>{{ des }}</p>
  </div>
</template>

<script>

export default {
  props: {
    name: { type: String, default: "" },
    des: { type: String, default: "" },
    mobile: { type: Boolean, default: false },
    usingNameMode: { type: Boolean, default: false },
  },
  data() {
    return {
      showCodes: false,
    }
  },
  methods: {
    copy() {
      const { name, CopyText, mobile, usingNameMode } = this

      if (usingNameMode) {
        const content = mobile ? `<rt-icon name="${name}-m" />` : `<rt-icon name="${name}" />`
        // 将内容复制到剪贴板
        CopyText(content)
      } else {
        const content = mobile ? `<rtmicon-${name} />` : `<rticon-${name} />`
        // 将内容复制到剪贴板
        CopyText(content)
      }
    },
    CopyText(textToCopy) {
      if (!navigator.clipboard) {
        // 如果当前浏览器不支持 Clipboard API，则使用 execCommand 方法
        var textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          // alert("已复制到剪贴板！");
          this.$message({
            message: ` ${textToCopy} 已复制到剪贴板！`,
            type: 'success'
          });
        } catch (err) {
          // alert("无法复制到剪贴板：" + err);
          this.$message.error("无法复制到剪贴板：" + err);
        }
        document.body.removeChild(textArea);
        return;
      }
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // alert("已复制到剪贴板！");
          this.$message({
            message: ` ${textToCopy} 已复制到剪贴板！`,
            type: 'success'
          });
        })
        .catch((err) => {
          // alert("无法复制到剪贴板：" + err);
          this.$message.error("无法复制到剪贴板：" + err);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
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