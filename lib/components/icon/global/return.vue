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
    <path d="M962.7,364.5v-29.8c0-15.4-3.1-30.3-9.2-44.4l-68.4-158.4c-17.7-41-58.1-67.6-102.8-67.6H247.7
			c-44.7,0-85.1,26.5-102.8,67.6L76.5,290.2c-6.1,14.1-9.2,29-9.2,44.4v30.6V846v1.6c0,61.7,50.2,111.9,111.9,111.9h671.4
			c61.7,0,111.9-50.2,111.9-111.9v-0.9c0-0.3,0-0.5,0-0.8V365.2C962.7,365,962.7,364.7,962.7,364.5z M203.7,157.2
			c7.6-17.6,24.9-29,44-29h534.7c19.1,0,36.5,11.4,44,29l42.1,97.6c-5.8-0.9-11.7-1.4-17.8-1.4H179.3c-6,0-12,0.5-17.8,1.4
			L203.7,157.2z M898.7,846c0,26.5-21.5,48-48,48H179.3c-26.5,0-48-21.5-48-48V365.2c0-26.5,21.5-48,48-48h671.4
			c26.5,0,48,21.5,48,48V846z" />
    <path
      d="M572.9,504.8H425l23.1-23.1c12.5-12.5,12.5-32.7,0-45.2s-32.7-12.5-45.2,0l-98.6,98.6l98.6,98.6
			c6.2,6.2,14.4,9.4,22.6,9.4s16.4-3.1,22.6-9.4c12.5-12.5,12.5-32.7,0-45.2l-19.7-19.7h144.4c41.7,0,75.7,34,75.7,75.7
			s-34,75.7-75.7,75.7H411.4c-17.7,0-32,14.3-32,32s14.3,32,32,32h161.5c77,0,139.7-62.7,139.7-139.7S649.9,504.8,572.9,504.8z" />
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
