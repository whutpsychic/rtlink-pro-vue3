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
    <path d="M873.5,790.8l53.1-53.1c11.7-11.7,11.7-30.8,0-42.5s-30.8-11.7-42.5,0L831,748.3l-53.1-53.1c-11.7-11.7-30.8-11.7-42.5,0
			s-11.7,30.8,0,42.5l53.1,53.1L735.3,844c-11.7,11.7-11.7,30.8,0,42.5c5.9,5.9,13.6,8.8,21.3,8.8s15.4-2.9,21.3-8.8l53.1-53.1
			l53.1,53.1c5.9,5.9,13.6,8.8,21.3,8.8s15.4-2.9,21.3-8.8c11.7-11.7,11.7-30.8,0-42.5L873.5,790.8z" />
    <path class="st0" d="M895.3,447.1c18.8-22,18.8-56.6,0.1-78.7c-0.1-0.1-0.2-0.2-0.2-0.3l-207.6-237c-10-12-24.2-18.9-39.1-19
			c-0.1,0-0.2,0-0.2,0c-14.9,0-29.1,6.9-39.3,18.9c-9.1,10.4-14.1,24.3-14.1,39.2v100h-79.5c-14.6,0-26.3,11.8-26.3,26.3
			c0,14.6,11.8,26.3,26.3,26.3h105.9c14.6,0,26.3-11.8,26.3-26.3V170.2c0-1.8,0.4-3.2,0.7-3.9l207,236.4c2.1,2.6,2.1,7.8,0,10.4
			L648.5,649.4c-0.5-0.9-0.9-2.3-0.9-4.2V508.1c0-14.6-11.8-26.3-26.3-26.3H489.1H383.2V370.9c0-31.9-23.9-57.9-53.3-57.9
			c-15.1,0-29.5,6.7-39.3,18.4L83.8,568.8c-0.1,0.1-0.2,0.2-0.2,0.2c-18.7,22-18.7,56.5,0,78.6c0.1,0.2,0.2,0.3,0.4,0.4l206.7,233.7
			c10,12,24.2,18.9,39,19c0.1,0,0.2,0,0.2,0c14.9,0,29.1-6.9,39.3-18.9c9.1-10.4,14.1-24.3,14.1-39.2v-98.7h81.1
			c14.6,0,26.3-11.8,26.3-26.3c0-14.6-11.8-26.3-26.3-26.3H356.8c-14.6,0-26.3,11.8-26.3,26.3v125.2c0,1.8-0.4,3.2-0.7,3.9
			L123.6,613.5c-2-2.6-2-7.8,0-10.4l206-236.4c0.5,0.9,0.9,2.3,0.9,4.2V508c0,14.6,11.8,26.3,26.3,26.3H489h105.9v110.8
			c0,31.9,23.9,57.9,53.3,57.9c15.1,0,29.5-6.7,39.2-18.4L895,447.2C895.1,447.3,895.2,447.2,895.3,447.1z" />
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