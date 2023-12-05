<template>
  <!-- Generator: Adobe Illustrator 24.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :width="`${size}`" :height="`${size}`" :fill="color" :style="isLinear ? 'fill:url(#lgid)' : ''">
    <defs v-if="isLinear">
      <linearGradient id="lgid" :x1="gradientPosition[0]" :y1="gradientPosition[1]" :x2="gradientPosition[2]" :y2="gradientPosition[3]">
        <stop v-for="(it, i) in linearGradient" :key="i" :offset="it[0]" :style="`stop-color:${it[1]};`" />
      </linearGradient>
    </defs>
    <path d="M949.5,907.5L781.4,739.4C920,580.2,912.7,337.8,759.5,184.6c-157.9-160.9-417.2-160.9-578.1,0
		C102.4,265,62.9,370,62.9,475v0.3c0,105,39.5,210,118.5,290.4c80.5,80.5,184.8,119.2,289.1,119.2c95.5,0,193.4-35,268.8-102.6
		L907,950.1c11.6,13.5,30.9,13.5,42.5,0C961.1,938.5,961.1,919.1,949.5,907.5z M718.4,721.6c-134.7,134.7-358.2,134.7-493,0
		c-134.7-134.7-134.7-358.2,0-493c67.4-67.4,156.1-101,244.9-101c88.8,0,180.7,33.7,248,101C853.1,363.4,853.1,586.9,718.4,721.6z" />
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
