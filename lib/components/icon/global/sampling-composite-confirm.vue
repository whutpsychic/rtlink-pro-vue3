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
      d="M250.5,749.3c0,23.2,18.8,42,42,42h443c23.2,0,42-18.8,42-42s-18.8-42-42-42h-443C269.3,707.3,250.5,726.1,250.5,749.3z" />
    <path d="M336.6,521.9L484,669.3c7.2,7.3,17,12,27.9,12.5c0.7,0,1.4,0.1,2.1,0.1s1.4,0,2.1-0.1c10.9-0.5,20.7-5.2,27.9-12.5
			l147.4-147.4c16.4-16.4,16.4-43,0-59.4s-43-16.4-59.4,0l-76,75.9V196.8c0-23.2-18.8-42-42-42s-42,18.8-42,42v341.5l-76-75.9
			c-16.4-16.4-43-16.4-59.4,0C320.2,478.9,320.2,505.5,336.6,521.9z" />
    <path d="M850.1,140.2h-96.6c-23.2,0-42,18.8-42,42s18.8,42,42,42h96.6c15.6,0,25.2,8.9,25.2,13.7v557.5c0,4.8-9.6,13.7-25.2,13.7
			H177.8c-15.6,0-25.2-8.9-25.2-13.7V238c0-4.8,9.6-13.7,25.2-13.7h109.3c23.2,0,42-18.8,42-42s-18.8-42-42-42H177.8
			c-60.2,0-109.3,43.9-109.3,97.8v557.5c0,53.9,49,97.8,109.3,97.8h672.3c60.2,0,109.3-43.9,109.3-97.8V238
			C959.3,184.1,910.3,140.2,850.1,140.2z" />
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
