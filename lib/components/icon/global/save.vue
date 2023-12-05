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
		<path d="M961.3,275.3c-1-4.9-2.9-9.5-5.5-13.6c-1.7-2.8-3.7-5.3-5.9-7.5c-2.2-2.2-4.7-4.2-7.5-5.9c-1.9-1.2-4-2.3-6.2-3.2
			L532,65.4c-10.9-4.9-23.5-4.9-34.5,0L93.3,245c-2.2,0.9-4.3,2-6.3,3.3c-2.8,1.8-5.4,3.8-7.6,6.1c-2.1,2.1-4,4.5-5.6,7.1
			c-2.7,4.2-4.6,8.8-5.6,13.8c-0.6,2.9-0.9,5.8-0.9,8.7c0,0.4,0,0.7,0,1v449.1c0,16.8,9.9,31.9,25.2,38.8l404.3,179.7
			c2.9,1.3,6,2.4,9.2,3.1c2.9,0.6,5.9,1,8.9,1l0,0l0,0c2.9,0,5.8-0.3,8.8-0.9c3.2-0.7,6.3-1.7,9.2-3.1L937,773
			c15.3-6.8,25.2-22,25.2-38.7V285.2c0-0.3,0-0.6,0-0.8C962.2,281.3,961.9,278.3,961.3,275.3z M472.3,849.1L152,706.7V349.4
			l320.3,142.3V849.1z M514.7,417.8L214,284.2l300.7-133.6l300.7,133.6L514.7,417.8z M877.4,706.7L557.2,849.1V491.8l320.3-142.3
			L877.4,706.7L877.4,706.7z"/>
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
