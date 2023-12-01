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
    <path d="M914.8,515.1c-24.6,0-44.6,19.9-44.6,44.6v284.1c0,12.3-10,22.3-22.3,22.3H179.6c-12.3,0-22.3-10-22.3-22.3V175.3
			c0-12.3,10-22.3,22.3-22.3h384.3c24.6,0,44.6-19.9,44.6-44.6c0-24.6-19.9-44.6-44.6-44.6H179.6c-61.4,0-111.4,50-111.4,111.4
			v668.4c0,61.4,50,111.4,111.4,111.4H848c61.4,0,111.4-50,111.4-111.4v-284C959.3,535,939.4,515.1,914.8,515.1z" />
    <path d="M571.4,273.7c17.4,17.4,45.6,17.4,63,0l57.6-57.6v293.5c0,24.6,19.9,44.6,44.6,44.6c24.6,0,44.6-19.9,44.6-44.6V216.1
			l57.6,57.6c8.7,8.7,20.1,13.1,31.5,13.1s22.8-4.4,31.5-13.1c17.4-17.4,17.4-45.6,0-63L768.3,77.2c-1.1-1.2-2.3-2.3-3.6-3.3l0,0
			c-1.1-0.9-2.3-1.8-3.5-2.6c-0.3-0.2-0.6-0.4-0.9-0.6c-0.9-0.6-1.8-1.1-2.8-1.6c-0.4-0.2-0.9-0.4-1.3-0.6c-0.9-0.4-1.7-0.8-2.6-1.2
			c-0.5-0.2-1-0.4-1.5-0.5c-0.9-0.3-1.7-0.6-2.6-0.9c-0.5-0.2-1.1-0.3-1.6-0.4c-0.8-0.2-1.7-0.5-2.6-0.6c-0.7-0.1-1.4-0.2-2.1-0.3
			c-0.7-0.1-1.4-0.2-2.1-0.3c-2.9-0.3-5.9-0.3-8.8,0c-0.7,0.1-1.4,0.2-2.1,0.3c-0.7,0.1-1.4,0.2-2.1,0.3c-0.9,0.2-1.7,0.4-2.6,0.6
			c-0.5,0.1-1.1,0.3-1.6,0.4c-0.9,0.3-1.7,0.6-2.6,0.9c-0.5,0.2-1,0.3-1.5,0.5c-0.9,0.4-1.8,0.8-2.6,1.2c-0.4,0.2-0.9,0.4-1.3,0.6
			c-1,0.5-1.9,1.1-2.8,1.6c-0.3,0.2-0.6,0.4-0.9,0.6c-1.2,0.8-2.4,1.6-3.5,2.6l0,0c-1.3,1-2.5,2.1-3.6,3.3L571.4,210.7
			C554,228.1,554,256.3,571.4,273.7z" />
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
