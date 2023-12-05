import{d as c,i as g,r as s,o as v,c as m,a as e,w as p,F as h,e as i,k as _,l as $,m as y,n as x,j as A,t as S,q as k}from"./index-3daa1e9f.js";const V=i("h2",null,"基础用法",-1),w='<rt-formula-editor ref="fe" v-model:value="formula" :varOptions="varOptions"></rt-formula-editor>',U=`<script lang="ts" setup>
import { ref } from 'vue'

const formula = ref([])

const varOptions = ref([
  { label: "第一个选项", value: "option1" },
  { label: "第二个比较长的选项", value: "option2" },
  { label: "两字", value: "option4" },
  { label: "三个字", value: "option5" },
  { label: "四个大字", value: "option6" },
  { label: "五个撒的字", value: "option7" },
  { label: "六个阿松大字", value: "option8" },
  { label: "七个啊手动阀字", value: "option9" },
  { label: "八个啊手动阀发字", value: "option10" },
  { label: "九个阿松大地方给字", value: "option11" },
  { label: "十个打算发链接地方字", value: "option12" },
  { label: "十一安抚克里斯蒂郡个字", value: "option13" },
  { label: "十二个啊手动阀的首发式字", value: "option14" },
  { label: "十三个啊手动阀的首发式尾部", value: "option15" },
  { label: "十四个啊手动阀的首发式字尾部", value: "option16" },
  { label: "十五个啊手动阀的首发式字是尾部", value: "option17" },
  { label: "十六个啊手动阀的首发式字水水尾部", value: "option18" },
  { label: "十七个啊手动阀的首发式字水水水尾部", value: "option19" },
  { label: "十八个啊手动阀的首发式字大大大大尾部", value: "option20" },
  { label: "十九个啊手动阀的首发式字阿松大啊实尾部", value: "option21" },
  { label: "巨长无比的选项选项选项选项选项选项选项选项选项选项选项选项选项尾部", value: "option3" },
])

<\/script>`,C=c({__name:"basic",setup(d){const l=g([]),r=g([{label:"第一个选项",value:"option1"},{label:"第二个比较长的选项",value:"option2"},{label:"两字",value:"option4"},{label:"三个字",value:"option5"},{label:"四个大字",value:"option6"},{label:"五个撒的字",value:"option7"},{label:"六个阿松大字",value:"option8"},{label:"七个啊手动阀字",value:"option9"},{label:"八个啊手动阀发字",value:"option10"},{label:"九个阿松大地方给字",value:"option11"},{label:"十个打算发链接地方字",value:"option12"},{label:"十一安抚克里斯蒂郡个字",value:"option13"},{label:"十二个啊手动阀的首发式字",value:"option14"},{label:"十三个啊手动阀的首发式尾部",value:"option15"},{label:"十四个啊手动阀的首发式字尾部",value:"option16"},{label:"十五个啊手动阀的首发式字是尾部",value:"option17"},{label:"十六个啊手动阀的首发式字水水尾部",value:"option18"},{label:"十七个啊手动阀的首发式字水水水尾部",value:"option19"},{label:"十八个啊手动阀的首发式字大大大大尾部",value:"option20"},{label:"十九个啊手动阀的首发式字阿松大啊实尾部",value:"option21"},{label:"巨长无比的选项选项选项选项选项选项选项选项选项选项选项选项选项尾部",value:"option3"}]);return(t,a)=>{const n=s("rt-formula-editor"),o=s("demo-block");return v(),m(h,null,[V,e(o,{codehtml:w,code:U},{main:p(()=>[e(n,{ref:"fe",value:l.value,"onUpdate:value":a[0]||(a[0]=u=>l.value=u),varOptions:r.value},null,8,["value","varOptions"])]),_:1})],64)}}}),I=i("h2",null,"变量选项可搜索",-1),q=i("p",null,"仅 mode 为 select 时",-1),B=`<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          filterable></rt-formula-editor>`,M=`<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个选项", value: "option2" },
    { label: "第三个选项", value: "option3" },
  ]
})

<\/script>`,D=c({__name:"filterable",setup(d){const l=_({formula:[],varOptions:[{label:"第一个选项",value:"option1"},{label:"第二个选项",value:"option2"},{label:"第三个选项",value:"option3"}]});return(r,t)=>{const a=s("rt-formula-editor"),n=s("demo-block");return v(),m("div",null,[I,q,e(n,{codehtml:B,code:M},{main:p(()=>[e(a,{ref:"fe",value:l.formula,"onUpdate:value":t[0]||(t[0]=o=>l.formula=o),varOptions:l.varOptions,filterable:""},null,8,["value","varOptions"])]),_:1})])}}}),T=i("h2",null,"自定义附加符号",-1),N=i("p",null,"仅 mode 为 select 时",-1),E=`<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          :extraSymbols="state.extraSymbols"></rt-formula-editor>`,F=`<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个选项", value: "option2" },
    { label: "第三个选项", value: "option3" },
  ],
  extraSymbols: [
    { label: '$', value: '$' },
    { label: '^', value: '^' },
    { label: '&', value: '&' },
    { label: '恶意的非常规符号', value: 'hell1' },
  ]
})

<\/script>`,R=c({__name:"customSymbols",setup(d){const l=_({formula:[],varOptions:[{label:"第一个选项",value:"option1"},{label:"第二个选项",value:"option2"},{label:"第三个选项",value:"option3"}],extraSymbols:[{label:"$",value:"$"},{label:"^",value:"^"},{label:"&",value:"&"},{label:"恶意的非常规符号",value:"hell1"}]});return(r,t)=>{const a=s("rt-formula-editor"),n=s("demo-block");return v(),m("div",null,[T,N,e(n,{codehtml:E,code:F},{main:p(()=>[e(a,{ref:"fe",value:l.formula,"onUpdate:value":t[0]||(t[0]=o=>l.formula=o),varOptions:l.varOptions,extraSymbols:l.extraSymbols},null,8,["value","varOptions","extraSymbols"])]),_:1})])}}}),j=i("h2",null,"错误信息",-1),L=`<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          errmsg="这里是一些错误信息"></rt-formula-editor>`,z=`<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个选项", value: "option2" },
    { label: "第三个选项", value: "option3" },
  ]
})

<\/script>`,G=c({__name:"errorMsg",setup(d){const l=_({formula:[],varOptions:[{label:"第一个选项",value:"option1"},{label:"第二个选项",value:"option2"},{label:"第三个选项",value:"option3"}]});return(r,t)=>{const a=s("rt-formula-editor"),n=s("demo-block");return v(),m("div",null,[j,e(n,{codehtml:L,code:z},{main:p(()=>[e(a,{ref:"fe",value:l.formula,"onUpdate:value":t[0]||(t[0]=o=>l.formula=o),varOptions:l.varOptions,errmsg:"这里是一些错误信息"},null,8,["value","varOptions"])]),_:1})])}}}),H=i("h2",null,"带偏移量的变量",-1),J='<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions" varOffset></rt-formula-editor>',K=`<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个比较长的选项", value: "option2" },
    { label: "两字", value: "option4" },
    { label: "三个字", value: "option5" },
    { label: "四个大字", value: "option6" },
    { label: "五个撒的字", value: "option7" },
    { label: "六个阿松大字", value: "option8" },
    { label: "七个啊手动阀字", value: "option9" },
    { label: "八个啊手动阀发字", value: "option10" },
    { label: "九个阿松大地方给字", value: "option11" },
    { label: "十个打算发链接地方字", value: "option12" },
    { label: "十一安抚克里斯蒂郡个字", value: "option13" },
    { label: "十二个啊手动阀的首发式字", value: "option14" },
    { label: "十三个啊手动阀的首发式尾部", value: "option15" },
    { label: "十四个啊手动阀的首发式字尾部", value: "option16" },
    { label: "十五个啊手动阀的首发式字是尾部", value: "option17" },
    { label: "十六个啊手动阀的首发式字水水尾部", value: "option18" },
    { label: "十七个啊手动阀的首发式字水水水尾部", value: "option19" },
    { label: "十八个啊手动阀的首发式字大大大大尾部", value: "option20" },
    { label: "十九个啊手动阀的首发式字阿松大啊实尾部", value: "option21" },
    { label: "巨长无比的选项选项选项选项选项选项选项选项选项选项选项选项选项尾部", value: "option3" },
  ]
})

<\/script>`,P=c({__name:"offsets",setup(d){const l=_({formula:[],varOptions:[{label:"第一个选项",value:"option1"},{label:"第二个比较长的选项",value:"option2"},{label:"两字",value:"option4"},{label:"三个字",value:"option5"},{label:"四个大字",value:"option6"},{label:"五个撒的字",value:"option7"},{label:"六个阿松大字",value:"option8"},{label:"七个啊手动阀字",value:"option9"},{label:"八个啊手动阀发字",value:"option10"},{label:"九个阿松大地方给字",value:"option11"},{label:"十个打算发链接地方字",value:"option12"},{label:"十一安抚克里斯蒂郡个字",value:"option13"},{label:"十二个啊手动阀的首发式字",value:"option14"},{label:"十三个啊手动阀的首发式尾部",value:"option15"},{label:"十四个啊手动阀的首发式字尾部",value:"option16"},{label:"十五个啊手动阀的首发式字是尾部",value:"option17"},{label:"十六个啊手动阀的首发式字水水尾部",value:"option18"},{label:"十七个啊手动阀的首发式字水水水尾部",value:"option19"},{label:"十八个啊手动阀的首发式字大大大大尾部",value:"option20"},{label:"十九个啊手动阀的首发式字阿松大啊实尾部",value:"option21"},{label:"巨长无比的选项选项选项选项选项选项选项选项选项选项选项选项选项尾部",value:"option3"}]});return(r,t)=>{const a=s("rt-formula-editor"),n=s("demo-block");return v(),m("div",null,[H,e(n,{codehtml:J,code:K},{main:p(()=>[e(a,{ref:"fe",value:l.formula,"onUpdate:value":t[0]||(t[0]=o=>l.formula=o),varOptions:l.varOptions,varOffset:""},null,8,["value","varOptions"])]),_:1})])}}}),Q=i("h2",null,"自定义校验规则",-1),W=`<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          :rules="state.rules"></rt-formula-editor>`,X=`<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  formula: [],
  varOptions: [
    { label: "第一个选项", value: "option1" },
    { label: "第二个选项", value: "option2" },
    { label: "第三个选项", value: "option3" },
  ],
  rules: [
    {
      fn: (elementArr: Array<any>) => {
        return elementArr.length > 5;
      },
      msg: '公式长度不能超过5!'
    },
    {
      fn: (elementArr: Array<any>) => {
        const valueArr = elementArr.map((item) => { return item.value; });

        for (let i = 0; i < elementArr.length; i++) {
          let currV = valueArr[i];
          let nextV = valueArr[i + 1];

          return currV === 5 && nextV === '*'
        }
      },
      msg: '公式内容里不能包含5*'
    },
  ],
})

<\/script>`,Y=c({__name:"customRules",setup(d){const l=_({formula:[],varOptions:[{label:"第一个选项",value:"option1"},{label:"第二个选项",value:"option2"},{label:"第三个选项",value:"option3"}],rules:[{fn:r=>r.length>5,msg:"公式长度不能超过5!"},{fn:r=>{const t=r.map(a=>a.value);for(let a=0;a<r.length;a++){let n=t[a],o=t[a+1];return n===5&&o==="*"}},msg:"公式内容里不能包含5*"}]});return(r,t)=>{const a=s("rt-formula-editor"),n=s("demo-block");return v(),m("div",null,[Q,e(n,{codehtml:W,code:X},{main:p(()=>[e(a,{ref:"fe",value:l.formula,"onUpdate:value":t[0]||(t[0]=o=>l.formula=o),varOptions:l.varOptions,rules:l.rules},null,8,["value","varOptions","rules"])]),_:1})])}}}),Z=i("h2",null,"列表模式选择变量",-1),ee=`<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions"
          :extraSymbols="state.extraSymbols" mode="list"></rt-formula-editor>`,le=`<script lang="ts" setup>
import { reactive, onMounted } from 'vue'

const state = reactive({
  formula: [],
  varOptions: <any>[],
  extraSymbols: [
    { label: '$', value: '$' },
    { label: '^', value: '^' },
    { label: '&', value: '&' },
  ]
})

onMounted(() => {
  let result = []
  for (let i = 1; i < 33; i++) {
    result.push({ label: \`第\${i}个选项\`, value: \`option\${i}\` })
  }
  for (let i = 33; i < 67; i++) {
    result.push({ label: \`第\${i}个恶意的巨长无比的选项选项选项选\`, value: \`option\${i}\` })
  }
  for (let i = 67; i < 100; i++) {
    result.push({ label: \`第\${i}个选项\`, value: \`option\${i}\` })
  }
  state.varOptions = result;
})

<\/script>`,te=c({__name:"listTable",setup(d){const l=_({formula:[],varOptions:[],extraSymbols:[{label:"$",value:"$"},{label:"^",value:"^"},{label:"&",value:"&"}]});return $(()=>{let r=[];for(let t=1;t<33;t++)r.push({label:`第${t}个选项`,value:`option${t}`});for(let t=33;t<67;t++)r.push({label:`第${t}个恶意的巨长无比的选项选项选项选`,value:`option${t}`});for(let t=67;t<100;t++)r.push({label:`第${t}个选项`,value:`option${t}`});l.varOptions=r}),(r,t)=>{const a=s("rt-formula-editor"),n=s("demo-block");return v(),m("div",null,[Z,e(n,{codehtml:ee,code:le},{main:p(()=>[e(a,{ref:"fe",value:l.formula,"onUpdate:value":t[0]||(t[0]=o=>l.formula=o),varOptions:l.varOptions,extraSymbols:l.extraSymbols,mode:"list"},null,8,["value","varOptions","extraSymbols"])]),_:1})])}}}),oe=i("h2",null,"自定义变量选择",-1),ae=`<rt-formula-editor ref="fe" v-model:value="state.formula" :varOptions="state.varOptions" :rules="state.rules"
          mode="custom" @select="onSelect"></rt-formula-editor>
        <el-dialog v-model="state.selecting" title="选择自定义的变量">
          <el-button v-for="(item) in state.varOptions" :key="item.value" @click="() => onChoose(item.value)">
            {{ item.label }}
          </el-button>
        </el-dialog>`,ne=`<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  selecting: false,
  currentIndex: <number>0,
  formula: [],
  varOptions: [
    { label: "第一个自定义的选项", value: "option1" },
    { label: "第二个自定义的选项", value: "option2" },
    { label: "第三个自定义的选项", value: "option3" },
  ],
  rules: [
    {
      fn: (elementArr: Array<any>) => {
        return elementArr.length > 5;
      },
      msg: '公式长度不能超过5!'
    },
    {
      fn: (elementArr: Array<any>) => {
        const valueArr = elementArr.map((item) => { return item.value; });

        for (let i = 0; i < elementArr.length; i++) {
          let currV = valueArr[i];
          let nextV = valueArr[i + 1];

          return currV === 5 && nextV === '*'
        }
      },
      msg: '公式内容里不能包含5*'
    },
  ]
})

const onSelect = (index: number) => {
  state.selecting = true;
  state.currentIndex = index;
}

const onChoose = (v: any) => {
  const { currentIndex, formula } = state;
  let result = <any>[...formula];
  result[currentIndex] = v;
  state.formula = result;
  state.selecting = false;
}

<\/script>`,re=c({__name:"customVarSelector",setup(d){const l=_({selecting:!1,currentIndex:0,formula:[],varOptions:[{label:"第一个自定义的选项",value:"option1"},{label:"第二个自定义的选项",value:"option2"},{label:"第三个自定义的选项",value:"option3"}],rules:[{fn:a=>a.length>5,msg:"公式长度不能超过5!"},{fn:a=>{const n=a.map(o=>o.value);for(let o=0;o<a.length;o++){let u=n[o],b=n[o+1];return u===5&&b==="*"}},msg:"公式内容里不能包含5*"}]}),r=a=>{l.selecting=!0,l.currentIndex=a},t=a=>{const{currentIndex:n,formula:o}=l;let u=[...o];u[n]=a,l.formula=u,l.selecting=!1};return(a,n)=>{const o=s("rt-formula-editor"),u=s("el-button"),b=s("el-dialog"),O=s("demo-block");return v(),m("div",null,[oe,e(O,{codehtml:ae,code:ne},{main:p(()=>[e(o,{ref:"fe",value:l.formula,"onUpdate:value":n[0]||(n[0]=f=>l.formula=f),varOptions:l.varOptions,rules:l.rules,mode:"custom",onSelect:r},null,8,["value","varOptions","rules"]),e(b,{modelValue:l.selecting,"onUpdate:modelValue":n[1]||(n[1]=f=>l.selecting=f),title:"选择自定义的变量"},{default:p(()=>[(v(!0),m(h,null,y(l.varOptions,f=>(v(),x(u,{key:f.value,onClick:()=>t(f.value)},{default:p(()=>[A(S(f.label),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["modelValue"])]),_:1})])}}}),se={class:"page-container"},ue={class:"main-content"},ie=k(`<h2>FormulaEditor 公式编辑器</h2><h3>设计思路</h3><ul><li>公式编辑器常用于表单内数据编辑，因此本组件侧重于编辑功能，即数据输入的手段。</li><li>编辑公式时应该在头部展示结果字符串以预览效果。</li><li>修改变量应该可以在任意位置修改。</li><li>本组件的工作模式类似于原生的
          &lt; select /&gt;，需要装填变量数据源；单项类似于
          &lt; option /&gt;根据值渲染文字。 </li><li>因在实际应用时，变量数据往往巨大且逻辑关系纷繁复杂。所以提供两种默认选择变量的模式，以及自定义选择模式。当变量数据较少时可选用 select 模式；当变量数据较多时可选用 list 模式。如果变量的选取需要调用多接口复杂查询（或前两种模式无法满足需求）时，请使用自定义选择模式（例如根据树形结构查询变量表格）。自定义选择模式下仅暴露变量点击事件（要选择时）接口，具体UI需自行编写。</li><li>公式内容由固定值（数字）、变量、符号3种类型组成。</li><li>默认的运算符号只有+-*/()，预留了 extraSymbols 属性用以添加额外的自定义符号。</li><li>公式编辑器拥有内置默认的公式校验方法：1.变量不能连续出现；2.常量（数字）不能连续出现；3.符号非 &quot;(&quot; 或 &quot;)&quot; 则不能连续出现；4.不能以非 &quot;(&quot; 符号开头;5.变量和常量（数字）不能连续出现。这些内置的规则只是初步鉴定，无法保证所编辑的公式的合法性，如果您的公式校验规则复杂，需要您配合 @change 事件自行编写校验逻辑代码并将结论反馈给预留的 errmsg 接口。当 errmsg 有值时则显示其内容作为错误信息；否则按照默认的内置规则显示公式的错误信息。如果给 errmsg 赋了 false，则无论如何也不会显示错误信息。</li><li>适配瑞太的业务逻辑，公式变量可能存在常数偏移量，使用 varOffset 控制是否开启之。</li><li>开启偏移量校正后，组件会自动读取值分隔符后面的字符，并将之转为数字作为偏移量值;如果初始值里面没有偏移量，那么组件会将之自动校正至0。</li><li>预留了变量值修饰符接口，你可以按照自己的喜好定义之。</li></ul>`,3),pe=i("h2",null,"Attributes",-1),ve=i("h2",null,"Events",-1),me=i("h2",null,"Methods",-1),de=c({__name:"main",setup(d){const l=[{arg:"v-model: value",des:"绑定值",type:"Array",options:" — ",default:" — "},{arg:"varOptions",des:"变量值数据源",type:"Array",options:" — ",default:" — "},{arg:"mode",des:"选择变量值模式",type:"string",options:" select | list | custom",default:" select "},{arg:"filterable",des:'变量是否可搜索选项（仅适用于 varSelectMode = "select" 时）',type:"Boolean",options:" — ",default:"false"},{arg:"extraSymbols",des:"附加的自定义符号",type:"Array",options:" — ",default:" — "},{arg:"errmsg",des:"错误信息",type:"string | Boolean",options:" — ",default:" — "},{arg:"varOffset",des:"变量是否有偏移量",type:"Boolean",options:" — ",default:" false "},{arg:"offsetSpliter",des:"自定义变量值与偏移量值的分隔符号",type:"string",options:" — ",default:" | "},{arg:"varDecoration",des:"变量修饰符",type:"string",options:" — ",default:" — "},{arg:"rules",des:"附加的判断规则，用于判断公式的合法性",type:"Array<function(elArr)>",options:" — ",default:" — "}],r=[{name:"change",des:"值发生变化时触发",arg:"当前值"},{name:"select",des:"配合mode=custom时使用",arg:"当前操作项索引"}],t=[{name:"getStrResult",des:"获取字符串类型的表示式",arg:" — "}];return(a,n)=>{const o=s("line-spliter"),u=s("el-table-column"),b=s("el-table");return v(),m("div",se,[i("div",ue,[ie,e(C),e(o),e(D),e(o),e(R),e(o),e(G),e(o),e(P),e(o),e(Y),e(o),e(te),e(o),e(re),e(o),pe,e(b,{data:l,style:{width:"100%"}},{default:p(()=>[e(u,{prop:"arg",label:"参数",width:"180"}),e(u,{prop:"des",label:"说明"}),e(u,{prop:"type",label:"类型",width:"150"}),e(u,{prop:"options",label:"可选值"}),e(u,{prop:"default",label:"默认值",width:"100"})]),_:1}),ve,e(b,{data:r,style:{width:"100%"}},{default:p(()=>[e(u,{prop:"name",label:"事件名称",width:"180"}),e(u,{prop:"des",label:"说明"}),e(u,{prop:"arg",label:"回调参数",width:"150"})]),_:1}),me,e(b,{data:t,style:{width:"100%"}},{default:p(()=>[e(u,{prop:"name",label:"方法名",width:"180"}),e(u,{prop:"des",label:"说明"}),e(u,{prop:"arg",label:"参数",width:"150"})]),_:1})])])}}});export{de as default};
