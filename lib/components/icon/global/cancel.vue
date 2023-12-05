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
    <path d="M586.9,509.3l357-357c20.5-20.5,20.5-53.8,0-74.3s-53.8-20.5-74.3,0l-357,357l-357-357c-20.5-20.5-53.8-20.5-74.3,0
		s-20.5,53.8,0,74.3l357,357l-357,357c-20.5,20.5-20.5,53.8,0,74.3C91.5,950.9,105,956,118.4,956s26.9-5.1,37.2-15.4l357-357
		l357,357c10.3,10.3,23.7,15.4,37.2,15.4s26.9-5.1,37.2-15.4c20.5-20.5,20.5-53.8,0-74.3L586.9,509.3z" />
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
