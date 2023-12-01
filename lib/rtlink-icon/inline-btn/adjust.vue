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
    <path
      d="M874.4,629.6c-7.7-9.3-18.8-14.6-30.2-14.6l0,0c-11.5,0-22.5,5.3-30.3,14.6l-52.5,62.5l0.2-453.1
		c0-96.1-67-174.3-149.3-174.3c-80.5,0-146.6,75.2-149.2,168.7l-0.2,553.3c-0.3,45.2-30.1,82.1-66.6,82.1
		c-36.8,0-66.7-37.1-66.7-82.8V215c0-6.1-1.2-12-2.9-16.4c-2-7.2-5.2-13.3-9.5-18.3c-7.9-9-19.2-14.2-30.4-13.8
		c-11.5,0.2-22.5,5.8-30.1,15.3L134.6,333.5c-14.4,17.9-13.9,45.3,1.2,62.4c7.9,9,20.7,14.2,30.3,13.8c11.5-0.2,22.5-5.8,30.2-15.3
		l50.8-63.1V786c0,96.1,67,174.3,149.3,174.3s149.3-78.2,149.3-174.9V239c0-45.6,29.9-82.8,66.7-82.8c35.9,0,65.4,35.8,66.6,80
		l-0.1,0.4l0.2,565.4c-2.2,14.3,1.5,28.4,10,38.5c15.6,18.6,45.1,18.5,60.6,0l124.9-148.7C889.2,674.4,889.1,647,874.4,629.6z" />
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
