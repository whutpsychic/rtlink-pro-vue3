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
      d="M851.5,86H174.2c-58.9,0.4-106.5,48.8-106.1,107.5v633.9c0,59.3,48,107.5,107,107.5h676.4
			c59,0,107-48.2,107-107.5V193.5C958.5,134.2,910.5,86,851.5,86z M899.5,827.4c0,26.7-21.6,48.5-48,48.5H175.1
			c-26.5,0-48-21.8-48-48.5V193.3c-0.2-26.4,21.1-48.1,47.5-48.3l-0.2-29.5l0.7,29.5h676.4c26.5,0,48,21.8,48,48.5V827.4z" />
    <path class="st2" d="M513,266.8c-1.1,0-2.1,0-3.2,0c-171.6,1.8-309.3,142.3-307.5,313.9c0,14,11.3,26,25.9,26
			c13.9,0,25.8-11.3,25.8-26c0-144,115.9-261.3,259.7-261.3c143.1,0,259.7,116.6,259.7,261.3c0,14,11.3,26,25.8,26
			c13.9,0,25.9-11.3,25.9-26C825,407.5,685.2,266.8,513,266.8z" />
    <path class="st2" d="M542.2,559.1c-17.4,0-34,4.8-48.3,13.6L360.1,457.1c-12.9-11.1-32.3-9.6-43.5,3.2c-11,13.1-9.6,32.5,3.2,43.8
			l135.4,116.3c-3.5,10-5.3,20.5-5.5,31.1c0,51,41.1,93.2,92.6,93.2c50.7,0,92.6-41.4,92.6-93.2
			C634.1,601.3,592.9,559.1,542.2,559.1z" />
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
