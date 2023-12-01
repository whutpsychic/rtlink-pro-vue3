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
    <path d="M598,75.3c6.3,1.3,12.6,3,18.9,4.5C610.5,78.3,604.3,76.6,598,75.3z" />
    <path d="M676.9,99c9.2,4.1,16.8,11.3,20.9,20.7c4.3,9.9,4.4,21,0.5,31l-15.8,40c115.2,61.4,193.8,182.7,193.8,322.1
			c0,201.2-163.7,364.9-364.9,364.9s-364.9-163.8-364.9-365c0-187.5,142.2-342.2,324.3-362.5v-42.9c0-22.4,18.1-40.5,40.5-40.5
			c-245.9,0-446,200.1-446,446s200.1,446,446,446s446-200.1,446-446C957.3,325.3,841,164.9,676.9,99z" />
    <path d="M555.2,69c5.2,0.5,10.4,1.5,15.5,2.2C565.5,70.5,560.5,69.5,555.2,69z" />
    <path d="M470.8,107.3v42.9v362.5c0,19.5,13.8,36.2,32.9,39.8c2.6,0.5,5.1,0.7,7.6,0.7c16.4,0,31.4-9.9,37.7-25.6l133.4-337
			l15.8-40c4-10,3.8-21.2-0.5-31c-4-9.3-11.6-16.6-20.9-20.7c-0.5-0.2-0.9-0.7-1.4-0.9c-5.4-2.2-11-3.7-16.6-5.7
			c-6.5-2.3-12.9-4.7-19.4-6.7c-7.5-2.3-15.1-4-22.7-5.9c-6.3-1.5-12.5-3.3-18.9-4.5c-9-1.8-18.1-2.9-27.2-4.2
			c-5.2-0.7-10.3-1.7-15.5-2.2c-14.5-1.4-29.1-2.2-43.9-2.2C488.9,66.7,470.8,84.9,470.8,107.3z" />
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
