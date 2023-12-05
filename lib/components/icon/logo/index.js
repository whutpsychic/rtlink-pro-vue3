// **************************************************************************
import vue from "./vue.vue"
import vue2 from "./vue2.vue"
// **************************************************************************

const RtIcons = {
  // 注册所有图标
  install(app) {

    app.component('rticon-vue-logo', vue)
    app.component('rticon-vue', vue2)

  }
}

export default RtIcons