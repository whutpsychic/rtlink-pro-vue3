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
    <path
      d="M955.6,566.4C948.8,390.2,799.8,247,623.6,247H234.1l64.1-55c18.6-15.9,20.7-43.9,4.8-62.4c-15.9-18.7-43.9-20.8-62.5-4.8
		L86.4,257c-1.5,1.2-2.8,2.5-4.1,3.9c0,0,0,0-0.1,0.1c-0.5,0.5-1,1-1.4,1.6l-0.1,0.1c-0.5,0.5-0.9,1.1-1.4,1.7c0,0,0,0.1-0.1,0.1
		c-5.7,7.5-9.1,16.8-9.1,27c0,0.2,0,0.4,0,0.6c0,0.1,0,0.1,0,0.2c0,0.7,0,1.4,0.1,2.1v0.1c0,0.7,0.1,1.4,0.2,2.2c0,0,0,0,0,0.1
		c1.2,10.3,5.9,19.5,12.9,26.4L238,477.9c8.6,8.6,20,13,31.3,13s22.7-4.3,31.3-13c17.3-17.3,17.3-45.3,0-62.6l-79.4-79.4h402.3
		c129.2,0,238.5,105.1,243.6,234.2c2.6,65.6-21.8,128.5-68.7,177.2c-46.3,48.1-110,75.7-174.9,75.7H247.3
		c-24.5,0-44.3,19.8-44.3,44.3s19.8,44.3,44.3,44.3h376.3c88.9,0,175.9-37.5,238.7-102.8C925.1,743.2,959.1,655,955.6,566.4z" />
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
