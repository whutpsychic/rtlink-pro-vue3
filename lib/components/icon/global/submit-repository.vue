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
    <path d="M867.3,66.1H369.2c-50.8,0-92,41.2-92,92v112H151.5c-43.7,0-79.2,35.5-79.2,79.2V874c0,43.7,35.5,79.2,79.2,79.2h524.7
			c43.7,0,79.2-35.5,79.2-79.2V749.2h112c50.8,0,92-41.2,92-92V158C959.3,107.2,918.1,66.1,867.3,66.1z M696,874
			c0,10.9-8.9,19.8-19.8,19.8H151.5c-10.9,0-19.8-8.9-19.8-19.8V349.2c0-10.9,8.9-19.8,19.8-19.8h524.7c10.9,0,19.8,8.9,19.8,19.8
			V874z M900.9,657.2c0,18-14.6,32.6-32.6,32.6h-112V349.2c0-43.7-35.5-79.2-79.2-79.2H336.6V158c0-18,14.6-32.6,32.6-32.6h499.2
			c18,0,32.6,14.6,32.6,32.6L900.9,657.2L900.9,657.2z" />
    <path d="M548.1,492.9c-0.7-0.1-1.5-0.1-2.2-0.1H283.1c-15.7,0-29.1,11.9-30.2,27.5c-1.2,16.4,11,30.6,27.4,31.8
			c0.7,0.1,1.5,0.1,2.2,0.1h262.7c15.7,0,29.1-11.9,30.2-27.5C576.7,508.3,564.4,494.1,548.1,492.9z" />
    <path d="M548.1,671.1c-0.7-0.1-1.5-0.1-2.2-0.1H283.1c-15.7,0-29.1,11.9-30.2,27.5c-1.2,16.4,11,30.6,27.4,31.8
			c0.7,0.1,1.5,0.1,2.2,0.1h262.7c15.7,0,29.1-11.9,30.2-27.5C576.7,686.6,564.4,672.3,548.1,671.1z" />
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
