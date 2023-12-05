import './useElement.js'
import Icon from "./components/icon/index.js"

import FormulaEditor from "./components/formula-editor/main.vue"

const plugin = {
  install(app) {
    // 安装图标
    Icon.install(app)

    app.component('rt-formula-editor', FormulaEditor)
  }
}

export default plugin