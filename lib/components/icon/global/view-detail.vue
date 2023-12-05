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
    <path class="st1" d="M832.4,61.8H192.5c-70.7,0-128,57.3-128,128v639.8c0,70.7,57.3,128,128,128h639.8c70.7,0,128-57.3,128-128
			V189.8C960.4,119.1,903.1,61.8,832.4,61.8z M832.4,893.6H192.5c-35.3,0-64-28.6-64-64V189.8c0-35.3,28.6-64,64-64h639.8
			c35.3,0,64,28.6,64,64v639.8C896.4,865,867.7,893.6,832.4,893.6z" />
    <rect x="320.5" y="445.7" class="st1" width="447.9" height="64" />
    <rect x="320.5" y="637.7" class="st1" width="319.9" height="64" />
    <rect x="192.5" y="637.7" class="st1" width="64" height="64" />
    <rect x="320.5" y="253.8" class="st1" width="447.9" height="64" />
    <rect x="192.5" y="253.8" class="st1" width="64" height="64" />
    <rect x="192.5" y="445.7" class="st1" width="64" height="64" />
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
