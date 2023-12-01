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
    <path class="st1"
      d="M717.9,508.1c45.1-30.6,74.8-82.2,74.8-140.8c0-93.9-76.1-170-170-170s-170,76.1-170,170
		c0,93.9,76.1,170,170,170c107.3,0,194.3,87,194.3,194.3h48.6C865.5,631.3,804.7,545.2,717.9,508.1z M622.7,488.7
		c-67.1,0-121.4-54.4-121.4-121.4c0-67.1,54.4-121.4,121.4-121.4s121.4,54.4,121.4,121.4C744.1,434.3,689.7,488.7,622.7,488.7z" />
    <polygon class="st1" points="209.7,197.2 476.9,197.2 476.9,148.7 161.2,148.7 161.2,877.3 816.9,877.3 816.9,828.7 209.7,828.7 	
		" />
    <rect x="306.9" y="683" class="st1" width="267.2" height="48.6" />
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
