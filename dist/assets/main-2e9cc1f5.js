import{d as p,r as a,o as c,c as i,e as t,a as n,p as _,b as l,_ as r}from"./index-3daa1e9f.js";const o=s=>(_("data-v-d0302092"),s=s(),l(),s),d={class:"page-container"},m={class:"main-content"},u=o(()=>t("h2",null,"安装",-1)),h=o(()=>t("p",null,"本节将介绍如何在项目中使用 rtlink-pro。",-1)),v=o(()=>t("h3",null,"使用 npm 安装",-1)),g=o(()=>t("div",{class:"spliter"},null,-1)),f=o(()=>t("h3",null,"引入组件",-1)),k=o(()=>t("p",null,"在 main.js 中写入以下内容：",-1)),A=o(()=>t("div",{class:"spliter"},null,-1)),x=o(()=>t("p",null,"以上代码便完成了 rtlink-pro 的引入。",-1)),I="npm i rtlink-pro-vue3 -s",j=`// main.ts
import { createApp } from 'vue'
import RtlinkPro from 'rtlink-pro-vue3'

import App from './App.vue'

const app = createApp(App)

app.use(RtlinkPro)
app.mount('#app')`,B=p({__name:"main",setup(s){return(S,y)=>{const e=a("highlightjs");return c(),i("div",d,[t("div",m,[u,h,v,n(e,{language:"Javascript",code:I}),g,f,k,n(e,{language:"Javascript",code:j}),A,x])])}}});const J=r(B,[["__scopeId","data-v-d0302092"]]);export{J as default};
