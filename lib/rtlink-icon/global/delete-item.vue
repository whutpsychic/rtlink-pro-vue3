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
    <path d="M818.4,620.5c-15.7-15.7-41.1-15.7-56.7,0l-70.9,70.9l-70.9-70.9c-15.7-15.7-41.1-15.7-56.7,0
			c-15.7,15.7-15.7,41.1,0,56.7l70.9,70.9L563.2,819c-15.7,15.7-15.7,41.1,0,56.7c15.7,15.7,41.1,15.7,56.7,0l70.9-70.9l70.9,70.9
			c15.7,15.7,41.1,15.7,56.7,0c15.7-15.7,15.7-41.1,0-56.7l-70.9-70.9l70.9-70.9C834.1,661.6,834.1,636.2,818.4,620.5z" />
    <path d="M871.2,304.9c0-0.3,0-0.7-0.1-1c0-0.3,0-0.6-0.1-0.9c0-0.5-0.1-0.9-0.2-1.4c0-0.2,0-0.3-0.1-0.5c-0.1-0.5-0.2-1.1-0.3-1.6
			v-0.1c-1.4-7.6-5-14.5-10.1-19.9L680.4,79.3c-7.6-8.5-18.5-13.3-29.8-13.3H229.3c-44.2,0-80.2,36-80.2,80.2v722.2
			c0,44.2,36,80.2,80.2,80.2H470c22.2,0,40.1-17.9,40.1-40.1c0-22.2-17.9-40.1-40.1-40.1H229.3V146.3h361.1v160.5
			c0,22.2,17.9,40.1,40.1,40.1H791v140.4c0,22.2,17.9,40.1,40.1,40.1c22.2,0,40.1-17.9,40.1-40.1V306.8
			C871.3,306.2,871.3,305.5,871.2,304.9z M670.7,266.7v-78.2l70.4,78.2H670.7z" />
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
