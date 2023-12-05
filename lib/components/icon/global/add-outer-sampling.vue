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
    <path d="M915.3,695.4H755.6V535.7c0-23.5-19.1-42.6-42.6-42.6s-42.6,19-42.6,42.6v159.7H510.7c-23.5,0-42.6,19-42.6,42.6
			c0,23.5,19.1,42.6,42.6,42.6h159.7v159.7c0,23.5,19.1,42.6,42.6,42.6s42.6-19,42.6-42.6V780.6h159.7c23.5,0,42.6-19,42.6-42.6
			C957.9,714.5,938.8,695.4,915.3,695.4z" />
    <path class="st0" d="M280.4,905.8H207c-14.5,0-26.4-11.9-26.4-26.4V142.9c0-14.5,11.9-26.4,26.4-26.4h587.6
			c14.5,0,26.4,11.9,26.4,26.4v168.5c0,14.5,11.9,26.4,26.4,26.4s26.4-11.9,26.4-26.4V90.2c-0.5-14.5-12.4-26.4-26.9-26.4H180.2
			c-28.9,0-52.7,23.8-52.7,52.7v789.2c0,28.9,23.8,52.7,52.7,52.7h100.3c14.5,0,26.4-11.9,26.4-26.4
			C306.8,917.7,294.9,905.8,280.4,905.8z" />
    <path class="st0" d="M282,254.6c-14,0-25.3,11.4-25.3,25.3c0,14,11.4,25.3,25.3,25.3h405.7c13.4,0,24.8-11.4,25.3-25.3
			c0-14-11.4-25.3-25.3-25.3L282,254.6L282,254.6z" />
    <path class="st0" d="M381.2,433.4H282c-14,0-25.3,11.4-25.3,25.3c0,14,11.4,25.3,25.3,25.3h99.2c14,0,25.3-11.4,25.3-25.3
			S395.2,433.4,381.2,433.4z" />
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
