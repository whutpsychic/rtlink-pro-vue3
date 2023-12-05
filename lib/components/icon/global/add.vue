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
    <path d="M914.9,466.1H559.5l0.4-356.7c0-25.1-20.3-45.5-45.4-45.5c-0.1,0-0.1,0-0.1,0c-25.1,0-45.5,20.3-45.5,45.4l-0.4,356.8h-358
	c-25.1,0-45.5,20.4-45.5,45.5c0,25.1,20.4,45.5,45.5,45.5h357.8l-0.4,356.6c0,25.1,20.3,45.5,45.5,45.5c25.1,0,45.4-20.3,45.5-45.4
	l0.4-356.7h355.6c25.1,0,45.5-20.4,45.5-45.5S940,466.1,914.9,466.1z" />
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
