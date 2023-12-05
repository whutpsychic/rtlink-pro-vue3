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
      d="M687.3,376.1c-13.1-13.1-34.3-13-47.3,0L440.9,575.6l-88.2-87.8c-8.4-8.5-20.8-11.9-32.4-8.8s-20.7,12.2-23.7,23.8
			c-3.1,11.6,0.4,24,8.9,32.4l111.9,111.4c13.1,13,34.2,13,47.3-0.1l222.7-223C700.4,410.4,700.4,389.2,687.3,376.1L687.3,376.1z" />
    <path
      d="M512.3,65.3c-246.4,0-446.1,199.7-446.1,446s199.7,446.1,446.1,446.1s446.1-199.7,446.1-446.1S758.6,65.3,512.3,65.3z
			 M512.3,889.7c-209,0-378.4-169.4-378.4-378.4S303.3,133,512.3,133s378.4,169.4,378.4,378.4S721.3,889.7,512.3,889.7z" />
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