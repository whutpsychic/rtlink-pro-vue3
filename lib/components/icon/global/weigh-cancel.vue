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
    <path d="M615.1,513.4c-11.4-11.4-29.8-11.4-41.2,0l-62.5,62.5l-62.5-62.5c-11.4-11.4-29.8-11.4-41.2,0
			c-11.4,11.4-11.4,29.8,0,41.2l62.5,62.5l-62.5,62.5c-11.4,11.4-11.4,29.8,0,41.2c5.7,5.7,13.1,8.5,20.6,8.5s14.9-2.8,20.6-8.5
			l62.5-62.5l62.5,62.5c5.7,5.7,13.1,8.5,20.6,8.5c7.4,0,14.9-2.8,20.6-8.5c11.4-11.4,11.4-29.8,0-41.2l-62.5-62.5l62.5-62.5
			C626.5,543.2,626.5,524.8,615.1,513.4z" />
    <path d="M845.1,98.2H176.8c-28.2,0.2-54.6,11.4-74.4,31.4c-19.8,20.1-30.5,46.7-30.3,74.6v625.5c0,58.5,47.4,106.1,105.6,106.1
			h667.4c58.2,0,105.6-47.6,105.6-106.1V204.2C950.7,145.7,903.3,98.2,845.1,98.2z M892.5,829.7c0,26.4-21.3,47.8-47.4,47.8H177.7
			c-26.1,0-47.4-21.5-47.4-47.8V204c-0.1-12.6,4.7-24.5,13.6-33.5c8.9-9,20.7-14,33.3-14.1l-0.2-29.1l0.7,29.1h667.4
			c26.1,0,47.4,21.5,47.4,47.8L892.5,829.7L892.5,829.7z" />
    <path d="M511.1,276.6c-1.1,0-2.1,0-3.2,0C338.6,278.3,202.8,417,204.5,586.3c0,13.8,11.2,25.6,25.5,25.6
			c13.7,0,25.5-11.2,25.5-25.6c0-142.1,114.4-257.8,256.2-257.8c141.2,0,256.2,115.1,256.2,257.8c0,13.8,11.1,25.6,25.5,25.6
			c13.7,0,25.5-11.2,25.5-25.6C819,415.3,681.1,276.6,511.1,276.6z" />
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
