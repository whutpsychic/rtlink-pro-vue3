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
    <path class="st0" d="M851.6,428.8L420.3,860.1l-6.7,53.1c-2.5,12.9,0.9,26.4,9.4,36.5c7,6.9,16.8,10.3,26.6,9.4h9.9l53.1-6.7
			L944,521.2L851.6,428.8z" />
    <path class="st0" d="M330.7,893.5v-0.4H188.1c-10.2,0.5-20.1-3-27.5-9.9s-11.9-16.4-12.1-26.6V166.7c0.3-10.2,4.7-19.7,12.3-26.6
			c7.4-6.9,17.5-10.4,27.5-9.9h583.9c10.2-0.5,20.1,3,27.5,9.9s11.9,16.4,12.3,26.6v162.6c-1.3,12.7,4.6,24.9,15.4,31.7
			c10.8,6.8,24.4,6.8,35.2,0s16.7-19.1,15.4-31.7V166.7c-0.3-27.7-11.6-54.2-31.5-73.5c-19.8-19.3-46.6-29.9-74.4-29.4h-584
			c-27.7-0.5-54.4,10-74.3,29.4C94,112.5,82.6,139,82.3,166.7v690C82.7,884.5,94,911,114,930.3s46.9,29.9,74.6,29.2h142.1
			c16.8-1.8,29.6-16.1,29.6-33C360.4,909.5,347.6,895.3,330.7,893.5z" />
    <path class="st0"
      d="M701,287.2c6.9-6.3,11-15,11.2-24.3c-0.3-9.3-4.2-18.1-11.1-24.4c-6.9-6.3-16.1-9.4-25.3-8.7H284.4
			c-12.8-1.7-25.4,4.2-32.4,15.1c-6.9,11-6.9,24.8,0,35.8s19.6,16.8,32.4,15.1h391.4C685.1,296.4,694.2,293.3,701,287.2z" />
    <path class="st0" d="M576.7,428.8H284.4c-12.8-1.7-25.4,4.2-32.4,15.1c-6.9,11-6.9,24.8,0,35.8s19.6,16.8,32.4,15.1h292.3
			c12.8,1.7,25.4-4.2,32.4-15.1c6.9-11,6.9-24.8,0-35.8C602.2,432.9,589.5,427.1,576.7,428.8z" />
    <path class="st0" d="M347.3,661.1h-66c-16.8,1.8-29.6,16.1-29.6,33c0,17,12.8,31.2,29.6,33h66c12.7,1.3,24.9-4.6,31.7-15.4
			c6.8-10.8,6.8-24.4,0-35.2C372.2,665.6,360,659.6,347.3,661.1z" />
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
