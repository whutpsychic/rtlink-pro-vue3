<template>
  <!-- Generator: Adobe Illustrator 24.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :width="`${size}`" :height="`${size}`" :fill="color"
    :style="isLinear ? 'fill:url(#lgid)' : ''">
    <defs v-if="isLinear">
      <linearGradient id="lgid" :x1="gradientPosition[0]" :y1="gradientPosition[1]" :x2="gradientPosition[2]"
        :y2="gradientPosition[3]">
        <stop v-for="(it, i) in linearGradient" :key="i" :offset="it[0]" :style="`stop-color:${it[1]};`" />
      </linearGradient>
    </defs>
    <path d="M850.7,68.1H181.4c-61.5,0-111.6,50-111.6,111.6V849c0,61.5,50,111.6,111.6,111.6h669.3c61.5,0,111.6-50,111.6-111.6
			v-96.2c0-24.6-20-44.6-44.6-44.6s-44.6,20-44.6,44.6V849c0,12.3-10,22.3-22.3,22.3H181.4c-12.3,0-22.3-10-22.3-22.3V179.6
			c0-12.3,10-22.3,22.3-22.3h669.3c12.3,0,22.3,10,22.3,22.3v108.8c0,24.6,20,44.6,44.6,44.6s44.6-20,44.6-44.6V179.6
			C962.3,118.1,912.2,68.1,850.7,68.1z" />
    <path d="M752.2,679.7c8.7,8.7,20.1,13.1,31.5,13.1s22.8-4.4,31.5-13.1L948.9,546c1.1-1.1,2.1-2.3,3.1-3.5c0-0.1,0.1-0.1,0.1-0.2
			c0.9-1.1,1.7-2.2,2.5-3.4c0.1-0.1,0.2-0.2,0.2-0.4c0.7-1.1,1.4-2.2,2-3.4c0.1-0.1,0.1-0.3,0.2-0.4c0.6-1.2,1.2-2.3,1.7-3.6
			c0-0.1,0.1-0.2,0.1-0.4c0.5-1.2,0.9-2.5,1.3-3.8c0-0.1,0.1-0.2,0.1-0.3c0.4-1.3,0.7-2.6,1-3.9c0-0.1,0-0.2,0-0.2
			c0.3-1.3,0.4-2.7,0.6-4c0-0.1,0-0.1,0-0.2c0.1-1.4,0.2-2.7,0.2-4.1c0-1.4-0.1-2.8-0.2-4.1c0-0.1,0-0.1,0-0.2
			c-0.1-1.4-0.3-2.7-0.6-4c0-0.1,0-0.2,0-0.2c-0.3-1.3-0.6-2.6-1-3.9c0-0.1-0.1-0.2-0.1-0.3c-0.4-1.3-0.8-2.5-1.3-3.8
			c0-0.1-0.1-0.2-0.1-0.4c-0.5-1.2-1.1-2.4-1.7-3.6c-0.1-0.1-0.1-0.3-0.2-0.4c-0.6-1.2-1.3-2.3-2-3.4c-0.1-0.1-0.1-0.2-0.2-0.4
			c-0.8-1.2-1.6-2.3-2.5-3.4c0-0.1-0.1-0.1-0.1-0.2c-1-1.2-2-2.4-3.1-3.5L815.3,348.8c-17.4-17.4-45.7-17.4-63.1,0
			c-17.4,17.4-17.4,45.7,0,63.1l57.7,57.7H516.1c-24.6,0-44.6,20-44.6,44.6c0,24.6,20,44.6,44.6,44.6H810l-57.7,57.7
			C734.8,634,734.8,662.2,752.2,679.7z" />
  </svg>
</template>

<script>
import { defaultSize } from "../config"

export default {
  props: {
    size: { type: [String, Number], default: defaultSize },
    color: { type: String, default: '#000' },
    gradientPosition: { type: Array, default: () => ([]) },
    linearGradient: { type: Array, default: () => ([]) },
  },
  computed: {
    isLinear() {
      return (!!this.gradientPosition.length) && (!!this.linearGradient.length)
    }
  }
}
</script>