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
    <path d="M221.4,465.9" />
    <path
      d="M547.6,128.9c-24.4-22.1-61.6-22.1-85.9,0L114.2,458.8c-13.1,11.9-14.2,32.1-2.3,45.3c11.9,13.1,32.1,14.2,45.3,2.3l5.5-5.3
	v344.3c0,17,6.7,33.3,18.8,45.4c12,12,28.3,18.8,45.4,18.8h186.6v-193c0-12,4.7-23.5,13.2-32c8.5-8.5,20-13.2,32-13.2h87.8
	c12,0,23.5,4.7,32,13.2c8.5,8.5,13.2,20,13.2,32v193h191c17,0,33.3-6.8,45.4-18.8c12-12,18.8-28.4,18.8-45.4V505.3
	c14.2,12.9,34.4,11.9,46.3-1.3c5.7-6.3,8.7-14.6,8.2-23.1c-0.4-8.5-4.2-16.5-10.5-22.2L547.6,128.9L547.6,128.9z M547.6,128.9" />
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
