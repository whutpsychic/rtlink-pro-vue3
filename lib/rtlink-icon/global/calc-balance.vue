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
    <path d="M766.7,57.8H266.8c-42,0-76.3,34.2-76.3,76.3V884c0,42,34.2,76.3,76.3,76.3h499.9c42,0,76.2-34.2,76.2-76.3V134.1
			C842.9,92,808.7,57.8,766.7,57.8z M773.8,884c0,3.9-3.2,7.1-7.1,7.1H266.8c-3.9,0-7.1-3.2-7.1-7.1V134.1c0-3.9,3.2-7.1,7.1-7.1
			h499.9c3.9,0,7.1,3.2,7.1,7.1L773.8,884L773.8,884z" />
    <path d="M370.9,293.6h291.6c19.1,0,34.6-15.5,34.6-34.6s-15.5-34.6-34.6-34.6H370.9c-19.1,0-34.6,15.5-34.6,34.6
			C336.3,278.2,351.8,293.6,370.9,293.6z" />
    <circle cx="370.9" cy="446.5" r="41.7" />
    <circle cx="370.9" cy="571.5" r="41.7" />
    <circle cx="370.9" cy="696.5" r="41.7" />
    <ellipse cx="516.7" cy="446.5" rx="41.7" ry="41.7" />
    <ellipse cx="516.7" cy="571.5" rx="41.7" ry="41.7" />
    <ellipse cx="516.7" cy="696.5" rx="41.7" ry="41.7" />
    <circle cx="662.5" cy="446.5" r="41.7" />
    <circle cx="662.5" cy="571.5" r="41.7" />
    <circle cx="662.5" cy="696.5" r="41.7" />
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
