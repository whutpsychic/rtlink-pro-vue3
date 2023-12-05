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
    <path class="st0" d="M519.3,916.6l-14.6-10.3C492.3,896,174.5,623.8,174.5,441c2.9-185.8,155.9-334.1,341.8-331.2
			c182.6,2.9,329.5,150.8,331.3,333.3c0,180.7-303.3,452.9-315.8,465.3L519.3,916.6z M511,143.8c-164,0-297,132.9-297,296.9v0.1
			c0,145.4,245.1,371.8,303.2,423.7c58.2-54,290.8-280.4,290.8-423.7c0-164-132.9-297-296.9-297H511z M511,143.8" />
    <path d="M513.2,584.2c-79.2,0-143.4-64.2-143.4-143.3c0-79.2,64.2-143.3,143.3-143.3c79.2,0,143.3,64.2,143.3,143.3v0
		C656.4,520,592.3,584.1,513.2,584.2L513.2,584.2z M513.2,339.2c-57.4,0.4-103.5,47.3-103.1,104.6c0.4,56.8,46.3,102.7,103.1,103.1
		c57.4,0.4,104.2-45.7,104.6-103.1c0.4-57.4-45.7-104.2-103.1-104.6H513.2z M513.2,339.2" />
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
