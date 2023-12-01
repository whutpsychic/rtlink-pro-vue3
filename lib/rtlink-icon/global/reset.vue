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
    <path d="M898,274.2L529.1,67.4c-10.2-5.7-22.6-5.7-32.8,0L127.4,274.2c-10.6,5.9-17.1,17.1-17.1,29.3V717
			c0,12.1,6.6,23.3,17.1,29.3l368.9,206.8c5,2.8,10.7,4.3,16.4,4.3s11.4-1.5,16.4-4.3L898,746.3c10.6-5.9,17.1-17.1,17.1-29.3V303.4
			C915.2,291.3,908.6,280.1,898,274.2z M848.1,697.4l-335.4,188l-335.4-188V323.1l335.4-188l335.4,188V697.4z" />
    <path
      d="M333.9,510.2c0,98.6,80.2,178.9,178.9,178.9s178.9-80.2,178.9-178.9s-80.2-178.9-178.9-178.9S333.9,411.6,333.9,510.2z
			 M624.5,510.2c0,61.6-50.1,111.8-111.8,111.8s-111.8-50.1-111.8-111.8S451,398.4,512.7,398.4S624.5,448.6,624.5,510.2z" />
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
