// **************************************************************************
import adjust from "./adjust.vue"
import checkItem from "./check-item.vue"
import configure2 from "./configure2.vue"
import copy from "./copy.vue"
import detail from "./detail.vue"
import disable2 from "./disable2.vue"
import edit from "./edit.vue"
import export2 from "./export2.vue"
import filling from "./filling.vue"
import input from "./input.vue"
import mate from "./mate.vue"
import play from "./play.vue"
import print from "./print.vue"
import process from "./process.vue"
import rule from "./rule.vue"
import stop from "./stop.vue"
import upload from "./upload.vue"
import view from "./view.vue"
import view2 from "./view2.vue"
// **************************************************************************

const RtIcons = {
  // 注册所有图标
  install(app) {

    app.component('rticon-adjust', adjust)
    app.component('rticon-check-item', checkItem)
    app.component('rticon-configure2', configure2)
    app.component('rticon-copy', copy)
    app.component('rticon-detail', detail)
    app.component('rticon-disable2', disable2)
    app.component('rticon-edit', edit)
    app.component('rticon-export2', export2)
    app.component('rticon-filling', filling)
    app.component('rticon-input', input)
    app.component('rticon-mate', mate)
    app.component('rticon-play', play)
    app.component('rticon-print', print)
    app.component('rticon-process', process)
    app.component('rticon-rule', rule)
    app.component('rticon-stop', stop)
    app.component('rticon-upload', upload)
    app.component('rticon-view', view)
    app.component('rticon-view2', view2)

  }
}

export default RtIcons