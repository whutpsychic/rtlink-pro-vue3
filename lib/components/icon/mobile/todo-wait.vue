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
    <path d="M762.9,511.8H511V259.9c0-15.5-12.5-28-28-28c-15.5,0-28,12.5-28,28v279.9c0,15.5,12.5,28,28,28h279.9
		c15.5,0,28-12.5,28-28C790.9,524.3,778.4,511.8,762.9,511.8z" />
    <path d="M511,63.9c-247.3,0-447.8,200.5-447.8,447.8c0,247.3,200.5,447.8,447.8,447.8c247.3,0,447.8-200.5,447.8-447.8
		C958.8,264.4,758.3,63.9,511,63.9z M511,903.6c-216.4,0-391.8-175.4-391.8-391.8c0-216.4,175.4-391.8,391.8-391.8
		c216.4,0,391.8,175.4,391.8,391.8C902.8,728.2,727.4,903.6,511,903.6z" />
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
