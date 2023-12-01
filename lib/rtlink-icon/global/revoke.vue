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
    <path d="M922.5,170.5c-20.9,0-37.8,16.9-37.8,37.8v331.1c0,21.3-17.3,38.6-38.5,38.6H198.9L338,438.9c14.8-14.8,14.8-38.7,0-53.5
		s-38.7-14.8-53.5,0L80.9,589c-5.2,5.2-9,11.9-10.5,19.4c0,0.2,0,0.3-0.1,0.5c-0.2,1-0.4,2.1-0.5,3.2c-0.1,1.2-0.2,2.5-0.2,3.8
		s0.1,2.5,0.2,3.8c0.1,1.1,0.3,2.1,0.5,3.2c0,0.2,0,0.3,0.1,0.5c1.5,7.5,5.2,14.2,10.5,19.4l203.6,203.6
		c7.4,7.4,17.1,11.1,26.8,11.1c9.7,0,19.4-3.7,26.8-11.1c14.8-14.8,14.8-38.7,0-53.5L198.9,653.7h647.2c63,0,114.2-51.3,114.2-114.3
		v-331C960.4,187.5,943.4,170.5,922.5,170.5z" />
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
