import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 黑暗模式
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'
import router from './router'

import './style/main.css'

import 'highlight.js/styles/rainbow.min.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import DemoBlock from "@/components/DemoBlock/main.vue"
import LineSpliter from "@/components/LineSpliter.vue"

import RtlinkPro from '$';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus, { zIndex: 3000 })
app.use(hljsVuePlugin)
app.use(RtlinkPro)

app.component("demo-block", DemoBlock)
app.component("line-spliter", LineSpliter)

app.mount('#app')
