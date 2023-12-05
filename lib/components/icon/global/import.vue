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
    <path d="M850.2,63.9H178c-61.8,0-112,50.3-112,112v672.2c0,61.8,50.3,112,112,112h672.2c61.8,0,112-50.3,112-112v-96.6
			c0-24.7-20.1-44.8-44.8-44.8s-44.8,20.1-44.8,44.8v96.6c0,12.4-10,22.4-22.4,22.4H178c-12.4,0-22.4-10-22.4-22.4V176
			c0-12.4,10-22.4,22.4-22.4h672.2c12.4,0,22.4,10,22.4,22.4v109.2c0,24.7,20.1,44.8,44.8,44.8s44.8-20.1,44.8-44.8V176
			C962.3,114.2,912,63.9,850.2,63.9z" />
    <path d="M962.3,512.1c0-24.7-20.1-44.8-44.8-44.8H622.3l57.9-57.9c17.5-17.5,17.5-45.9,0-63.4s-45.9-17.5-63.4,0L482.6,480.3
			c-1.1,1.1-2.2,2.3-3.2,3.5c0,0.1-0.1,0.1-0.1,0.2c-0.9,1.1-1.7,2.2-2.5,3.4c-0.1,0.1-0.2,0.2-0.2,0.4c-0.7,1.1-1.4,2.3-2,3.4
			c-0.1,0.1-0.1,0.3-0.2,0.4c-0.6,1.2-1.2,2.4-1.7,3.6c0,0.1-0.1,0.2-0.1,0.4c-0.5,1.2-0.9,2.5-1.3,3.8c0,0.1-0.1,0.2-0.1,0.3
			c-0.4,1.3-0.7,2.6-1,3.9c0,0.1,0,0.2,0,0.2c-0.3,1.3-0.5,2.7-0.6,4c0,0.1,0,0.1,0,0.2c-0.1,1.4-0.2,2.7-0.2,4.1
			c0,1.4,0.1,2.8,0.2,4.1c0,0.1,0,0.1,0,0.2c0.1,1.4,0.3,2.7,0.6,4c0,0.1,0,0.2,0,0.2c0.3,1.3,0.6,2.7,1,3.9c0,0.1,0.1,0.2,0.1,0.3
			c0.4,1.3,0.8,2.5,1.3,3.8c0,0.1,0.1,0.2,0.1,0.4c0.5,1.2,1.1,2.4,1.7,3.6c0.1,0.1,0.1,0.3,0.2,0.4c0.6,1.2,1.3,2.3,2,3.4
			c0.1,0.1,0.2,0.2,0.2,0.4c0.8,1.2,1.6,2.3,2.5,3.4c0,0.1,0.1,0.1,0.1,0.2c1,1.2,2,2.4,3.1,3.5l134.3,134.3
			c8.8,8.8,20.2,13.1,31.7,13.1s22.9-4.4,31.7-13.1c17.5-17.5,17.5-45.9,0-63.4l-57.9-57.9h295.1
			C942.2,556.9,962.3,536.8,962.3,512.1z" />
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
