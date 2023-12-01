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
    <path d="M723.9,605.8c-9.4-9.2-24.5-9.2-33.8,0c-9.3,9.2-9.3,24.2,0,33.6c42.9,42.5,89.1,120.6,89.1,190.9
		c0,13.1,10.7,23.7,23.9,23.7c13.2,0,23.9-10.6,23.9-23.7C827,745.9,775.2,656.7,723.9,605.8z" />
    <path d="M513.8,168.8c-110.7,0-200.7,89.4-200.7,199.1c0,70.4,36.5,134.1,96.4,170.2c-39.4,14.6-75.7,37.9-105.8,67.8
		c-51.4,50.9-103.1,140-103.1,224.4c0,13.1,10.7,23.7,23.9,23.7c13.2,0,23.9-10.6,23.9-23.7c0-70.4,46.2-148.3,89.1-190.9
		c45.3-44.8,105.4-70.6,168.7-72.4c2.5,0.1,5.1,0.1,7.7,0.1c110.7,0,200.7-89.4,200.7-199.1C714.5,258.2,624.5,168.8,513.8,168.8z
		 M516.9,519.7c-1.1-0.1-2.1-0.2-3.2-0.2c-2.4,0-4.9,0-7.3,0.1c-81.8-3.8-145.6-70.3-145.6-151.5c0-83.7,68.7-151.8,152.9-151.8
		c84.4,0,152.9,68.1,152.9,151.8C666.7,450.1,599.6,518,516.9,519.7z" />
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
