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
    <path class="st1" d="M283.6,907.1h-73.4c-14.5,0-26.4-11.9-26.4-26.4V144.4c0-14.5,11.9-26.4,26.4-26.4h587.5
			c14.5,0,26.4,11.9,26.4,26.4v168.5c0,14.5,11.9,26.4,26.4,26.4s26.4-11.9,26.4-26.4V91.7c-0.5-14.5-12.4-26.4-26.9-26.4H183.4
			c-28.9,0-52.7,23.8-52.7,52.7v789.1c0,28.9,23.8,52.7,52.7,52.7h100.2c14.5,0,26.4-11.9,26.4-26.4
			C310,919,298.1,907.1,283.6,907.1z" />
    <path class="st1" d="M888.7,924.2L728,481.9c-7.8-21.2-27.9-35.1-50.1-35.1c-22.2,0-42.4,14-50.1,35.1L465.5,924.2
			c-6.2,17.6,6.2,35.7,24.8,35.7c10.9,0,21.2-7.2,24.8-17.6l52.7-145.7h218.6l52.7,145.7c3.6,10.3,13.4,17.6,24.8,17.6
			C882,959.8,894.9,941.8,888.7,924.2z M582.8,755.2l94-257.9l94,257.9H582.8z" />
    <path class="st1" d="M285.2,256c-14,0-25.3,11.4-25.3,25.3s11.4,25.3,25.3,25.3h405.6c13.4,0,24.8-11.4,25.3-25.3
			c0-14-11.4-25.3-25.3-25.3L285.2,256L285.2,256z" />
    <path class="st1" d="M384.4,434.8h-99.2c-14,0-25.3,11.4-25.3,25.3s11.4,25.3,25.3,25.3h99.2c14,0,25.3-11.4,25.3-25.3
			S398.3,434.8,384.4,434.8z" />
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
