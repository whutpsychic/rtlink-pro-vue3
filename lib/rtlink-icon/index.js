import global from "./global"
import inlineBtn from "./inline-btn"
import logo from "./logo"
import mobile from "./mobile"
import rtIcon from "./rt-icon.vue"

const RtIcons = {
  // 注册所有图标
  install(app) {
    global.install(app)
    inlineBtn.install(app)
    logo.install(app)
    mobile.install(app)
    app.component("rt-icon", rtIcon)
  }
}

export default RtIcons