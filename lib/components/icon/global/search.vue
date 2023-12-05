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
    <path class="st1" d="M931.2,861.7l-129-129c129-159.5,119.3-394-29.1-542.2C696.8,114.4,593.6,71.8,485.9,71.8
			C261.7,72,80,253.9,80.2,478.1c0.1,224.2,182,405.9,406.3,405.7c92.9-0.1,182.4-32,254.1-89.6l129.1,129.1
			c8.2,8.1,19.2,12.7,30.8,12.7v-1.8c10.1-0.4,19.8-4.3,27.4-11.1C945.6,907,947.2,879.6,931.2,861.7z M485.9,799.1
			C309.4,799,166.5,655.8,166.7,479.3C166.8,302.9,310,160,486.4,160.1v-1.8c85,0.3,166.4,34.7,225.8,95.5
			c59.9,60,93.5,141.3,93.4,226.1C805.5,656.4,662.4,799.3,485.9,799.1z" />
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
