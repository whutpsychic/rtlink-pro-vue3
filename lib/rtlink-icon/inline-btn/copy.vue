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
    <path d="M722.4,193h-543c-44.1,0.1-79.8,35.8-79.8,79.9v606.9c0,44,35.8,79.8,79.8,79.8h543c44,0,79.9-35.8,79.9-79.8v-607
			C802.2,228.8,766.4,193,722.4,193z M738.3,879.7c0,8.8-7.2,16-16,16h-543c-8.8,0-16-7.1-16-16V272.8c0-8.8,7.1-16,16-16h543
			c8.8,0,16,7.2,16,16V879.7z" />
    <path d="M850.1,65.2h-543c-17.6,0-31.9,14.3-31.9,31.9s14.3,31.9,31.9,31.9h543c8.8,0,16,7.1,16,16v606.9
			c0,17.6,14.3,31.9,31.9,31.9s31.9-14.3,31.9-31.9V145.1C930,101.1,894.2,65.2,850.1,65.2z" />
    <path d="M610.6,520.4H291.2c-17.6,0-31.9,14.3-31.9,31.9s14.3,31.9,31.9,31.9h319.4c17.6,0,31.9-14.3,31.9-31.9
			S628.2,520.4,610.6,520.4z" />
    <path d="M482.8,678.7H291.2c-17.6,0-31.9,14.3-31.9,31.9s14.3,31.9,31.9,31.9h191.6c17.6,0,31.9-14.3,31.9-31.9
			S500.5,678.7,482.8,678.7z" />
    <path d="M610.6,360.7H291.2c-17.6,0-31.9,14.3-31.9,31.9s14.3,31.9,31.9,31.9h319.4c17.6,0,31.9-14.3,31.9-31.9
			S628.2,360.7,610.6,360.7z" />
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
