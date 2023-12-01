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
    <path d="M511.7,66.2c-246.9,0-447,200.1-447,447s200.1,447,447,447c246.9,0,447-200.1,447-447S758.5,66.2,511.7,66.2z M511.7,915.5
		c-222.2,0-402.3-180.1-402.3-402.3s180.1-402.3,402.3-402.3C733.8,110.9,914,291,914,513.2S733.8,915.5,511.7,915.5z" />
    <path
      d="M711.1,374.2L475.6,609.7L357,491.1c-9.5-9.5-25.6-8.7-36.1,1.8c-10.5,10.5-11.3,26.6-1.8,36.1l137.2,137.2
		c5,5,11.8,7.1,18.6,6.5c7.6,0.6,15.4-1.9,21.2-7.7L749,412.1c10.5-10.5,10.5-27.5,0-37.9C738.6,363.7,721.6,363.7,711.1,374.2z" />
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
