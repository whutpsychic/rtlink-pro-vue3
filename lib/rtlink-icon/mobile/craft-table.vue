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
    <path d="M901.7,280L769.5,160.9c-32.4-29.2-85-29.2-117.5,0L519.8,280c-32.4,29.2-32.4,76.6,0,105.8L652,504.9
		c32.4,29.2,85,29.2,117.5,0l132.2-119.1C934.1,356.6,934.1,309.2,901.7,280z" />
    <path d="M426.8,588.7c-15.6-14-36.7-21.9-58.7-21.9H181.1c-22,0-43.2,7.9-58.7,21.9c-15.6,14-24.3,33.1-24.3,52.9V810
		c0,19.8,8.8,38.9,24.3,52.9c15.6,14,36.7,21.9,58.7,21.9H368c22,0,43.2-7.9,58.7-21.9c15.6-14,24.3-33.1,24.3-52.9V641.6
		C451.1,621.8,442.4,602.7,426.8,588.7z" />
    <path
      d="M368,173.9H181.1c-22,0-43.2,7.9-58.7,21.9c-15.6,14-24.3,33.1-24.3,52.9v168.4c0,19.8,8.8,38.9,24.3,52.9
		c15.6,14,36.7,21.9,58.7,21.9H368c22,0,43.2-7.9,58.7-21.9c15.6-14,24.3-33.1,24.3-52.9V248.7C451.1,207.4,413.9,173.9,368,173.9z" />
    <path d="M863,588.7c-15.6-14-36.7-21.9-58.8-21.9H617.3c-22,0-43.2,7.9-58.8,21.9c-15.6,14-24.3,33.1-24.3,52.9V810
		c0,19.8,8.8,38.9,24.3,52.9c15.6,14,36.7,21.9,58.8,21.9h186.9c22,0,43.2-7.9,58.8-21.9c15.6-14,24.3-33.1,24.3-52.9V641.6
		C887.3,621.8,878.6,602.7,863,588.7z" />
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
