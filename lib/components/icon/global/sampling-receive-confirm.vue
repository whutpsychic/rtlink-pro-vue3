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
    <path d="M333.2,521.1l148.5,148.4c1.1,1.1,2.2,2.1,3.4,3.1l0,0c1.1,0.9,2.2,1.7,3.3,2.4c0.3,0.2,0.6,0.4,0.9,0.6
			c0.9,0.5,1.7,1.1,2.6,1.6c0.4,0.2,0.8,0.4,1.2,0.6c0.8,0.4,1.6,0.8,2.5,1.2c0.5,0.2,0.9,0.3,1.4,0.5c0.8,0.3,1.6,0.6,2.5,0.9
			c0.5,0.2,1.1,0.3,1.6,0.4c0.8,0.2,1.6,0.4,2.4,0.6c0.7,0.1,1.4,0.2,2,0.3c0.7,0.1,1.3,0.2,2,0.3c1.4,0.1,2.8,0.2,4.2,0.2
			s2.8-0.1,4.2-0.2c0.7-0.1,1.4-0.2,2-0.3c0.7-0.1,1.4-0.2,2-0.3c0.8-0.2,1.6-0.4,2.4-0.6c0.5-0.1,1.1-0.2,1.6-0.4
			c0.8-0.3,1.7-0.6,2.5-0.9c0.5-0.2,0.9-0.3,1.4-0.5c0.8-0.3,1.7-0.8,2.5-1.2c0.4-0.2,0.8-0.4,1.2-0.6c0.9-0.5,1.8-1,2.6-1.6
			c0.3-0.2,0.6-0.4,0.9-0.6c1.1-0.8,2.2-1.6,3.3-2.4l0,0c1.2-1,2.3-2,3.4-3.1l148.4-148.4c16.5-16.5,16.5-43.3,0-59.8
			s-43.3-16.5-59.8,0l-76.4,76.4V193.8c0-23.4-18.9-42.3-42.3-42.3c-23.4,0-42.3,18.9-42.3,42.3v343.9l-76.5-76.4
			c-16.5-16.5-43.3-16.5-59.8,0C316.7,477.8,316.7,504.6,333.2,521.1z"/>
    <path d="M850.3,136.8H753c-23.4,0-42.3,18.9-42.3,42.3s18.9,42.3,42.3,42.3h97.3c15.7,0,25.4,9,25.4,13.8v561.4
			c0,4.9-9.6,13.8-25.4,13.8h-677c-15.7,0-25.4-9-25.4-13.8V235.3c0-4.9,9.6-13.8,25.4-13.8h110c23.4,0,42.3-18.9,42.3-42.3
			s-18.9-42.3-42.3-42.3h-110c-60.7,0-110,44.2-110,98.5v561.4c0,54.3,49.3,98.5,110,98.5h677c60.7,0,110-44.2,110-98.5V235.3
			C960.4,181,911,136.8,850.3,136.8z"/>
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
