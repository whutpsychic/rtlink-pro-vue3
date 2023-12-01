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
    <rect x="313.1" y="213.4" width="398" height="49.8" />
    <path d="M885.3,512h-25V138.9c0-41.2-33.4-74.7-74.6-74.7H238.4c-41.2,0-74.7,33.5-74.7,74.7V512H139c-41.2,0-74.7,33.5-74.7,74.7
		v298.4c0,41.2,33.5,74.7,74.7,74.7h746.2c41.2,0,74.7-33.5,74.8-74.6V586.6C959.9,545.5,926.5,512,885.3,512z M213.6,138.9
		c0-13.7,11.2-24.9,24.9-24.9h547.3c13.7,0,24.9,11.2,24.9,24.9V512H661.4h-0.1v49.8h0.1v74.6c0,13.7-11.2,24.9-24.9,24.9H387.8
		c-13.7,0-24.9-11.2-24.9-24.9V512h-0.1H213.6V138.9z M910.2,885.2c0,13.7-11.2,24.9-24.9,24.9H139c-13.7,0-24.9-11.2-24.9-24.9
		V586.6c0-13.7,11.2-24.9,24.9-24.9h24.8h149.3v74.7c0,41.2,33.5,74.7,74.7,74.7h248.7c41.2,0,74.7-33.5,74.7-74.7v-74.7h149.2h25
		c13.7,0,24.9,11.2,24.9,24.9V885.2z" />
    <rect x="313.1" y="362.8" width="398" height="49.8" />
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
