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
    <path
      d="M931.9,904.5H96.5c-14.9,0-27,12.1-27,27s12.1,27,27,27H932c14.9,0,27-12.1,27-27C958.9,916.6,946.8,904.5,931.9,904.5z" />
    <path d="M952.7,692.8c0-48.5-39.3-87.8-87.8-87.8H702.5c-20.3,0-39.3-9.8-51.1-26.3c-14.7-20.5-22.6-45.2-22.5-70.5V504
			c67.9-44.9,108.5-121.1,107.9-202.4c0-130.3-99.9-236.3-222.7-236.3s-222.7,106-222.7,236.3C290.9,383,331.5,459.1,399.3,504v4.2
			c0.1,25.3-7.8,49.9-22.5,70.5C365,595.2,345.9,605,325.6,605H163.3c-48.5,0-87.8,39.3-87.8,87.8v141.8h877.2V692.8z M885,766.8
			H143v-74.1h0.1c0-11.1,8.9-20.1,20-20.3h162.3c42.1,0,81.7-20.4,106.2-54.7c22.9-32,35.2-70.4,35.2-109.8v-44.5l-18.5-9.4
			c-55.9-30.3-90.4-89.1-89.5-152.7c0-93,69.6-168.6,155.1-168.6S669,208.4,669,301.3c0.9,63.6-33.5,122.4-89.5,152.7l-18.5,9.4V508
			c-0.1,39.4,12.2,77.8,35.2,109.8c24.5,34.3,64,54.6,106.2,54.7h162.3c11.2,0,20.3,9.1,20.3,20.3V766.8z" />
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
