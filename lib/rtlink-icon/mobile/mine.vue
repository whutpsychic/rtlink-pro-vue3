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
    <path d="M905.5,792.4L690.2,533.6c-51.9,32.5-112.8,51.2-177.9,51.2c-62.7,0.1-124.3-17.6-177.9-51.2L119.1,792.4
		c-21.8,26.2-26.8,63.1-12.8,94.4c14,31.4,44.4,51.4,77.9,51.4h656.1c33.5,0,63.9-20.1,77.9-51.4
		C932.2,855.5,927.2,818.6,905.5,792.4z" />
    <path d="M512.3,548c128.7,0,233.1-104.6,233.1-233.6c0-129-104.4-233.6-233.1-233.6c-128.7,0-233.1,104.6-233.1,233.6
		S383.5,548,512.3,548z" />
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
