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
    <path class="st0" d="M893.1,532.2c-23.6,0-42.7,19.1-42.7,42.7c0,111.1-72,299.1-341.9,299.1S166.6,686.1,166.6,575
			c0-23.6-19.1-42.7-42.7-42.7c-23.6,0-42.7,19.1-42.7,42.7c0,133,89.3,384.6,427.3,384.6S935.8,708,935.8,575
			C935.8,551.4,916.7,532.2,893.1,532.2z" />
    <path class="st0" d="M282.3,391.5l183.6-183.6v495.3c0,23.6,19.1,42.7,42.7,42.7c23.6,0,42.7-19.1,42.7-42.7V208.2l183.3,183.3
			c8.3,8.3,19.3,12.5,30.2,12.5c10.9,0,21.9-4.2,30.2-12.5c16.7-16.7,16.7-43.7,0-60.4L538.7,74.7C522,58,495,58,478.3,74.7
			L221.9,331.1c-16.7,16.7-16.7,43.7,0,60.4C238.6,408.2,265.6,408.2,282.3,391.5z" />
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
