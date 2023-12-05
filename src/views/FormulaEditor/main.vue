<template>
  <div class="page-container">
    <div class="main-content">
      <h2>FormulaEditor 公式编辑器</h2>
      <h3>设计思路</h3>
      <ul>
        <li>公式编辑器常用于表单内数据编辑，因此本组件侧重于编辑功能，即数据输入的手段。</li>
        <li>编辑公式时应该在头部展示结果字符串以预览效果。</li>
        <li>修改变量应该可以在任意位置修改。</li>
        <li>本组件的工作模式类似于原生的{{ `
          < select />` }}，需要装填变量数据源；单项类似于{{ `
          < option />` }}根据值渲染文字。
        </li>
        <li>因在实际应用时，变量数据往往巨大且逻辑关系纷繁复杂。所以提供两种默认选择变量的模式，以及自定义选择模式。当变量数据较少时可选用 select 模式；当变量数据较多时可选用 list
          模式。如果变量的选取需要调用多接口复杂查询（或前两种模式无法满足需求）时，请使用自定义选择模式（例如根据树形结构查询变量表格）。自定义选择模式下仅暴露变量点击事件（要选择时）接口，具体UI需自行编写。</li>
        <li>公式内容由固定值（数字）、变量、符号3种类型组成。</li>
        <li>默认的运算符号只有+-*/()，预留了 extraSymbols 属性用以添加额外的自定义符号。</li>
        <li>公式编辑器拥有内置默认的公式校验方法：1.变量不能连续出现；2.常量（数字）不能连续出现；3.符号非 "(" 或 ")" 则不能连续出现；4.不能以非 "("
          符号开头;5.变量和常量（数字）不能连续出现。这些内置的规则只是初步鉴定，无法保证所编辑的公式的合法性，如果您的公式校验规则复杂，需要您配合 @change 事件自行编写校验逻辑代码并将结论反馈给预留的 errmsg
          接口。当
          errmsg
          有值时则显示其内容作为错误信息；否则按照默认的内置规则显示公式的错误信息。如果给 errmsg 赋了 false，则无论如何也不会显示错误信息。</li>
        <li>适配瑞太的业务逻辑，公式变量可能存在常数偏移量，使用 varOffset 控制是否开启之。</li>
        <li>开启偏移量校正后，组件会自动读取值分隔符后面的字符，并将之转为数字作为偏移量值;如果初始值里面没有偏移量，那么组件会将之自动校正至0。</li>
        <li>预留了变量值修饰符接口，你可以按照自己的喜好定义之。</li>
      </ul>

      <!-- 基础用法 -->
      <Basic />
      <line-spliter />

      <h2>Attributes</h2>
      <el-table :data="attrTableData" style="width: 100%">
        <el-table-column prop="arg" label="参数" width="180">
        </el-table-column>
        <el-table-column prop="des" label="说明">
        </el-table-column>
        <el-table-column prop="type" label="类型" width="150">
        </el-table-column>
        <el-table-column prop="options" label="可选值">
        </el-table-column>
        <el-table-column prop="default" label="默认值" width="100">
        </el-table-column>
      </el-table>
      <h2>Events</h2>
      <el-table :data="eventTableData" style="width: 100%">
        <el-table-column prop="name" label="事件名称" width="180">
        </el-table-column>
        <el-table-column prop="des" label="说明">
        </el-table-column>
        <el-table-column prop="arg" label="回调参数" width="150">
        </el-table-column>
      </el-table>
      <h2>Methods</h2>
      <el-table :data="methodTableData" style="width: 100%">
        <el-table-column prop="name" label="方法名" width="180">
        </el-table-column>
        <el-table-column prop="des" label="说明">
        </el-table-column>
        <el-table-column prop="arg" label="参数" width="150">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Basic from './usage/basic.vue';
// import Filterable from './usage/filterable.vue';
// import CustomSymbols from './usage/customSymbols.vue';
// import ErrorMsg from './usage/errorMsg.vue';
// import Offsets from './usage/offsets.vue';
// import CustomRules from './usage/customRules.vue';
// import ListTable from './usage/listTable.vue';
// import CustomVarSelector from './usage/customVarSelector.vue';

const attrTableData = [
  {
    arg: 'v-model: value',
    des: '绑定值',
    type: 'Array',
    options: ' — ',
    default: ' — '
  },
  {
    arg: 'varOptions',
    des: '变量值数据源',
    type: 'Array',
    options: ' — ',
    default: ' — '
  },
  {
    arg: 'mode',
    des: '选择变量值模式',
    type: 'string',
    options: ' select | list | custom',
    default: ' select '
  },
  {
    arg: 'filterable',
    des: '变量是否可搜索选项（仅适用于 varSelectMode = "select" 时）',
    type: 'Boolean',
    options: ' — ',
    default: 'false'
  },
  {
    arg: 'extraSymbols',
    des: '附加的自定义符号',
    type: 'Array',
    options: ' — ',
    default: ' — '
  },
  {
    arg: 'errmsg',
    des: '错误信息',
    type: 'string | Boolean',
    options: ' — ',
    default: ' — '
  },
  {
    arg: 'varOffset',
    des: '变量是否有偏移量',
    type: 'Boolean',
    options: ' — ',
    default: ' false '
  },
  {
    arg: 'offsetSpliter',
    des: '自定义变量值与偏移量值的分隔符号',
    type: 'string',
    options: ' — ',
    default: ' | '
  },
  {
    arg: 'varDecoration',
    des: '变量修饰符',
    type: 'string',
    options: ' — ',
    default: ' — '
  },
  {
    arg: 'rules',
    des: '附加的判断规则，用于判断公式的合法性',
    type: 'Array<function(elArr)>',
    options: ' — ',
    default: ' — '
  }
]
const eventTableData = [
  {
    name: 'change',
    des: '值发生变化时触发',
    arg: '当前值',
  },
  {
    name: 'select',
    des: '配合mode=custom时使用',
    arg: '当前操作项索引',
  }
]
const methodTableData = [
  {
    name: 'getStrResult',
    des: '获取字符串类型的表示式',
    arg: ' — ',
  }
]

</script>

<style>
h2,
h3 {
  margin-bottom: 1em;
}

p {
  font-size: 14px;
  margin-bottom: 0.5em;
}

li {
  font-size: 15px;
  margin-bottom: 0.6em;
}
</style>