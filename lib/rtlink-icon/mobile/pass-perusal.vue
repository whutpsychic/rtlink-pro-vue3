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
    <polygon
      points="633.4,606.3 633.4,656.6 835.3,656.6 615.7,874.2 651.2,909.8 871.8,691.2 871.8,892 922.1,892 922.1,606.3 	" />
    <path d="M748.3,437.1c0-12.4-12.4-24.9-24.9-24.9H275.6c-12.4,0-24.9,12.4-24.9,24.9c0,12.4,12.4,24.9,24.9,24.9h447.8
		C735.9,462,748.3,449.6,748.3,437.1z" />
    <path d="M422.4,710.8H280.6c-14.9,0-27.4,10-27.4,24.9c0,12.4,12.4,24.9,27.4,24.9h141.8c14.9,0,27.4-12.4,27.4-24.9
		C449.8,720.7,437.3,710.8,422.4,710.8z" />
    <path d="M723.4,263H275.6c-12.4,0-24.9,12.4-24.9,24.9c0,12.4,12.4,24.9,24.9,24.9h447.8c12.4,0,24.9-12.4,24.9-24.9
		C748.3,275.4,735.9,263,723.4,263z" />
    <path d="M422.4,561.5H280.6c-14.9,0-27.4,9.9-27.4,24.9c0,12.4,12.4,24.9,27.4,24.9h141.8c14.9,0,27.4-12.4,27.4-24.9
		C449.8,571.5,437.3,561.5,422.4,561.5z" />
    <path
      d="M499.5,909.8H151.2V113.7h696.6v373.2c0,14.9,10,24.9,24.9,24.9c14.9,0,24.9-10,24.9-24.9v-398c0-12.4-12.4-24.9-24.9-24.9
		H126.4c-12.4,0-24.9,12.4-24.9,24.9v845.9c0,12.4,12.4,24.9,24.9,24.9h373.2c14.9,0,24.9-10,24.9-24.9S514.5,909.8,499.5,909.8z" />
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
