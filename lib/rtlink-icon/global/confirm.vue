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
    <path class="st1" d="M919.9,64.9H103.5C81.7,64.9,64,82.5,64,104.3v816.5c0,21.8,17.7,39.4,39.4,39.4h816.5
			c21.8,0,39.4-17.7,39.4-39.5V104.3C959.3,82.5,941.7,64.9,919.9,64.9z M880.5,881.3H143V143.7h737.5V881.3z" />
    <path class="st1" d="M415.9,722.1c7.7,7.7,17.8,11.6,27.9,11.6s20.2-3.8,28-11.6l341-341.1c15.4-15.4,15.4-40.4,0-55.8
			s-40.4-15.4-55.8,0L443.8,638.4L313.4,508c-15.4-15.4-40.4-15.4-55.8,0c-15.4,15.4-15.4,40.4,0,55.8L415.9,722.1z" />
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
