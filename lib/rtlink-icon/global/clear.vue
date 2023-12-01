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
    <path d="M857.4,339.2H655.2V170.5c0-57.3-46.5-103.8-103.8-103.8h-70.3c-57.3,0-103.8,46.5-103.8,103.8v168.7h-211
			c-55.8-0.6-101.5,44.2-102.1,100.1c-0.4,43.9,27.2,81.6,66.2,95.9v320.6c0,57.3,46.5,103.8,103.8,103.8h555.2
			c57.3,0,103.8-46.5,103.8-103.8V534.4c37.9-14.9,64.6-52,64.2-95.1C956.9,384.2,912.4,339.7,857.4,339.2z M833.4,855.7
			c0,24.3-19.7,43.9-43.9,43.9H687.2V753c0-16.5-13.4-30-30-30c-16.5,0-30,13.4-30,30v146.7h-77.9V753c0-16.5-13.4-30-30-30
			c-16.5,0-30,13.4-30,30v146.7h-78.9V753c0-16.5-13.4-30-30-30c-16.5,0-30,13.4-30,30v146.7H234.3c-24.3,0-43.9-19.7-43.9-43.9
			V548.4h643V855.7z M857.4,481.4H166.3c-22.7,0.4-41.4-17.8-41.8-40.5s17.8-41.4,40.5-41.8c0.4,0,0.9,0,1.3,0h211v0.4h63.4v-229
			c0-22.3,18.1-40.4,40.4-40.5h70.3c22.3,0,40.4,18.1,40.4,40.5v229.1h63.4v-0.5h202.2c22.7,0.4,40.9,19.1,40.5,41.8
			C897.6,463.1,879.6,481.1,857.4,481.4z" />
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